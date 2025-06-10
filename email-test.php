<?php
// email-test.php - Email Diagnostic Script for WillowBrook Real Estate
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Test - WillowBrook Real Estate</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .result { padding: 15px; margin: 10px 0; border-radius: 5px; }
        .success { background-color: #d4edda; border: 1px solid #c3e6cb; color: #155724; }
        .error { background-color: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; }
        .info { background-color: #d1ecf1; border: 1px solid #bee5eb; color: #0c5460; }
        pre { background-color: #f8f9fa; padding: 10px; border-radius: 3px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Email Diagnostic Tool</h1>
    <p>This tool helps diagnose email delivery issues for your contact forms.</p>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['test_email'])) {
        $test_email = filter_var($_POST['test_email'], FILTER_VALIDATE_EMAIL);
        
        if ($test_email) {
            echo "<h2>Email Test Results</h2>";
            
            // Test basic mail function
            $to = 'operations@willowbrook-realestate.com';
            $subject = 'Test Email from WillowBrook Website';
            $message = "This is a test email sent at " . date('Y-m-d H:i:s') . "\n\n";
            $message .= "If you receive this email, your contact form email system is working correctly.\n\n";
            $message .= "Test initiated from: " . $_SERVER['HTTP_HOST'] . "\n";
            $message .= "User IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
            
            $headers = array();
            $headers[] = 'From: WillowBrook Real Estate <noreply@willowbrook-realestate.com>';
            $headers[] = 'Reply-To: ' . $test_email;
            $headers[] = 'X-Mailer: PHP/' . phpversion();
            $headers[] = 'Content-Type: text/plain; charset=UTF-8';
            
            $mail_result = mail($to, $subject, $message, implode("\r\n", $headers));
            
            if ($mail_result) {
                echo '<div class="result success">✅ Test email sent successfully! Check operations@willowbrook-realestate.com for the test message.</div>';
            } else {
                echo '<div class="result error">❌ Failed to send test email. See configuration details below.</div>';
            }
        } else {
            echo '<div class="result error">❌ Invalid email address provided.</div>';
        }
    }
    ?>

    <h2>PHP Mail Configuration</h2>
    <div class="result info">
        <pre><?php
        echo "PHP Version: " . phpversion() . "\n";
        echo "Mail Function Available: " . (function_exists('mail') ? 'Yes' : 'No') . "\n";
        echo "Sendmail Path: " . (ini_get('sendmail_path') ?: 'Not set') . "\n";
        echo "SMTP Server: " . (ini_get('SMTP') ?: 'Not set (using sendmail)') . "\n";
        echo "SMTP Port: " . (ini_get('smtp_port') ?: 'Not set') . "\n";
        echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "\n";
        echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "\n";
        ?></pre>
    </div>

    <h2>Send Test Email</h2>
    <form method="POST">
        <p>
            <label for="test_email">Your Email Address:</label><br>
            <input type="email" id="test_email" name="test_email" required style="width: 300px; padding: 8px;">
        </p>
        <p>
            <button type="submit" style="padding: 10px 20px; background: #007cba; color: white; border: none; border-radius: 3px;">Send Test Email</button>
        </p>
    </form>

    <h2>Common Email Issues & Solutions</h2>
    <div class="result info">
        <h3>If emails are not arriving:</h3>
        <ol>
            <li><strong>Check Spam/Junk Folder:</strong> Test emails often end up in spam folders</li>
            <li><strong>Server Configuration:</strong> Your web host may need to configure sendmail or SMTP</li>
            <li><strong>DNS Records:</strong> Make sure your domain has proper SPF/DKIM records</li>
            <li><strong>From Address:</strong> Use an email address from your domain (e.g., noreply@yourdomain.com)</li>
            <li><strong>Rate Limiting:</strong> Some servers limit how many emails can be sent per hour</li>
        </ol>
        
        <h3>Next Steps if Test Fails:</h3>
        <ul>
            <li>Contact your web hosting provider about email configuration</li>
            <li>Ask them to enable/configure sendmail or provide SMTP settings</li>
            <li>Check server error logs for mail-related errors</li>
            <li>Consider using a third-party email service (SendGrid, Mailgun, etc.)</li>
        </ul>
    </div>

    <h2>Error Log Check</h2>
    <p>Recent PHP errors related to mail:</p>
    <div class="result info">
        <pre><?php
        // Try to read recent error logs
        $error_log_paths = [
            ini_get('error_log'),
            '/var/log/apache2/error.log',
            '/var/log/nginx/error.log',
            $_SERVER['DOCUMENT_ROOT'] . '/error_log',
            dirname(__FILE__) . '/error_log'
        ];
        
        $found_logs = false;
        foreach ($error_log_paths as $log_path) {
            if ($log_path && file_exists($log_path) && is_readable($log_path)) {
                echo "Checking: $log_path\n";
                $log_content = file_get_contents($log_path);
                $mail_errors = array_filter(explode("\n", $log_content), function($line) {
                    return stripos($line, 'mail') !== false || stripos($line, 'sendmail') !== false;
                });
                
                if (!empty($mail_errors)) {
                    echo "Recent mail-related errors:\n";
                    echo implode("\n", array_slice($mail_errors, -5)) . "\n\n";
                    $found_logs = true;
                }
                break;
            }
        }
        
        if (!$found_logs) {
            echo "No accessible error logs found or no mail-related errors.\n";
            echo "This could mean:\n";
            echo "- Email is working fine\n";
            echo "- Error logging is disabled\n";
            echo "- Error logs are in a different location\n";
        }
        ?></pre>
    </div>
</body>
</html>