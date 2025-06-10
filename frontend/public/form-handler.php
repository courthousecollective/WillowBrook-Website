<?php
// form-handler.php - PHP Email Handler for WillowBrook Real Estate Forms
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

try {
    // Get JSON input
    $json_input = file_get_contents('php://input');
    $form_data = json_decode($json_input, true);
    
    // If JSON parsing failed, try to get form data directly
    if (!$form_data) {
        $form_data = $_POST;
    }
    
    // Validate required fields
    if (empty($form_data['fullName']) || empty($form_data['email'])) {
        throw new Exception('Name and email are required fields');
    }
    
    // Sanitize input data
    $fullName = sanitize_input($form_data['fullName']);
    $email = sanitize_input($form_data['email']);
    $phone = isset($form_data['phone']) ? sanitize_input($form_data['phone']) : 'Not provided';
    $subject = isset($form_data['subject']) ? sanitize_input($form_data['subject']) : '';
    $message = isset($form_data['message']) ? sanitize_input($form_data['message']) : '';
    $address = isset($form_data['address']) ? sanitize_input($form_data['address']) : '';
    $condition = isset($form_data['condition']) ? sanitize_input($form_data['condition']) : '';
    $zipCodes = isset($form_data['zipCodes']) ? sanitize_input($form_data['zipCodes']) : '';
    $maxBudget = isset($form_data['maxBudget']) ? sanitize_input($form_data['maxBudget']) : '';
    $propertyType = isset($form_data['propertyType']) ? sanitize_input($form_data['propertyType']) : '';
    $formType = isset($form_data['formType']) ? sanitize_input($form_data['formType']) : 'general';
    
    // Validate email format
    if (!validate_email($email)) {
        throw new Exception('Invalid email format');
    }
    
    // Email configuration
    $to = 'operations@willowbrook-realestate.com';
    $email_subject = 'New ' . ucwords(str_replace('-', ' ', $formType)) . ' Form Submission - WillowBrook Real Estate';
    
    // Create email body
    $email_body = "New form submission from WillowBrook Real Estate website:\n\n";
    $email_body .= "Form Type: " . ucwords(str_replace('-', ' ', $formType)) . "\n";
    $email_body .= "Submission Time: " . date('Y-m-d H:i:s') . "\n\n";
    $email_body .= "Contact Information:\n";
    $email_body .= "- Name: $fullName\n";
    $email_body .= "- Email: $email\n";
    $email_body .= "- Phone: $phone\n";
    
    if (!empty($subject)) {
        $email_body .= "- Subject: $subject\n";
    }
    
    if (!empty($address)) {
        $email_body .= "- Property Address: $address\n";
    }
    
    if (!empty($condition)) {
        $email_body .= "- Property Condition: $condition\n";
    }
    
    if (!empty($zipCodes)) {
        $email_body .= "- Target Zip Codes: $zipCodes\n";
    }
    
    if (!empty($maxBudget)) {
        $email_body .= "- Maximum Budget: $maxBudget\n";
    }
    
    if (!empty($propertyType)) {
        $email_body .= "- Property Type: $propertyType\n";
    }
    
    if (!empty($message)) {
        $email_body .= "\nMessage:\n$message\n";
    }
    
    $email_body .= "\n---\n";
    $email_body .= "This email was sent from the WillowBrook Real Estate website contact form.\n";
    $email_body .= "Please respond directly to the customer at: $email\n";
    
    // Email headers
    $headers = array();
    $headers[] = 'From: WillowBrook Real Estate <noreply@willowbrook-realestate.com>';
    $headers[] = 'Reply-To: ' . $email;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    
    // Send email using PHP's mail() function
    $mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));
    
    if ($mail_sent) {
        // Log successful submission
        error_log("Form submission sent successfully to $to from $email");
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been received and we\'ll contact you within 24 hours.'
        ]);
    } else {
        // Log failed email
        error_log("Failed to send email to $to from $email");
        
        // Still return success to user, but log the issue
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been received. If you don\'t hear back within 24 hours, please contact us directly.'
        ]);
    }
    
} catch (Exception $e) {
    // Log error
    error_log("Form handler error: " . $e->getMessage());
    
    // Return error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'There was an error processing your submission. Please try again or contact us directly at operations@willowbrook-realestate.com.'
    ]);
}

// Function to check mail configuration (for debugging)
function check_mail_config() {
    $config_info = array();
    $config_info['php_version'] = phpversion();
    $config_info['sendmail_path'] = ini_get('sendmail_path');
    $config_info['smtp'] = ini_get('SMTP');
    $config_info['smtp_port'] = ini_get('smtp_port');
    $config_info['mail_function_available'] = function_exists('mail');
    
    return $config_info;
}

// Uncomment the line below to debug mail configuration
// error_log("Mail config: " . print_r(check_mail_config(), true));
?>