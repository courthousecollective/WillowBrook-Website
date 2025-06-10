from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime
import aiosmtplib
from email.message import EmailMessage
import json


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    fullName: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: Optional[str] = None
    address: Optional[str] = None
    condition: Optional[str] = None
    zipCodes: Optional[str] = None
    maxBudget: Optional[str] = None
    propertyType: Optional[str] = None
    formType: str = "general"

class EmailResponse(BaseModel):
    success: bool
    message: str

# Email sending function
async def send_email(form_data: ContactForm):
    """Send email using Python's built-in email functionality"""
    try:
        import smtplib
        from email.mime.text import MIMEText
        from email.mime.multipart import MIMEMultipart
        
        # Create email message
        msg = MIMEMultipart()
        msg['Subject'] = f"New {form_data.formType.replace('-', ' ').title()} Form Submission - WillowBrook Real Estate"
        msg['From'] = "noreply@willowbrook-realestate.com"
        msg['To'] = "operations@willowbrook-realestate.com"
        
        # Create email body
        body = f"""
New form submission from WillowBrook Real Estate website:

Form Type: {form_data.formType.replace('-', ' ').title()}
Submission Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Contact Information:
- Name: {form_data.fullName}
- Email: {form_data.email}
- Phone: {form_data.phone or 'Not provided'}

"""
        
        if form_data.subject:
            body += f"- Subject: {form_data.subject}\n"
        
        if form_data.address:
            body += f"- Property Address: {form_data.address}\n"
            
        if form_data.condition:
            body += f"- Property Condition: {form_data.condition}\n"
            
        if form_data.zipCodes:
            body += f"- Target Zip Codes: {form_data.zipCodes}\n"
            
        if form_data.maxBudget:
            body += f"- Maximum Budget: {form_data.maxBudget}\n"
            
        if form_data.propertyType:
            body += f"- Property Type: {form_data.propertyType}\n"
        
        if form_data.message:
            body += f"\nMessage:\n{form_data.message}\n"
        
        body += f"""
---
This email was sent from the WillowBrook Real Estate website contact form.
Please respond directly to the customer at: {form_data.email}
"""
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Try to send email using local sendmail
        try:
            # Use local sendmail (most common on web servers)
            server = smtplib.SMTP('localhost')
            server.send_message(msg)
            server.quit()
            logger.info(f"Email sent successfully to operations@willowbrook-realestate.com")
            
        except Exception as smtp_error:
            logger.error(f"SMTP sending failed: {str(smtp_error)}")
            # Log the email content for manual review
            logger.info(f"Email content for manual delivery:")
            logger.info(f"To: operations@willowbrook-realestate.com")
            logger.info(f"Subject: {msg['Subject']}")
            logger.info(f"Body: {body}")
        
        # Store the form submission in database regardless of email status
        form_dict = form_data.dict()
        form_dict['id'] = str(uuid.uuid4())
        form_dict['timestamp'] = datetime.utcnow()
        await db.form_submissions.insert_one(form_dict)
        
        return True
        
    except Exception as e:
        logger.error(f"Email processing failed: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=EmailResponse)
async def submit_contact_form(form_data: ContactForm):
    """Handle contact form submissions and send email notifications"""
    try:
        success = await send_email(form_data)
        if success:
            return EmailResponse(
                success=True, 
                message="Thank you! Your message has been received and we'll contact you within 24 hours."
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to process form submission")
    except Exception as e:
        logger.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your submission")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
