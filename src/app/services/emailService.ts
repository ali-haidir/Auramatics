// Email service for handling contact form submissions
// This service sends emails to the business owner when contact forms are submitted

import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

// Configuration
const EMAIL_CONFIG = {
  recipient: "jonpeter301@gmail.com",
  subject: "New Contact Form Submission - AURAMATICS",
  from: "AURAMATICS Contact Form <noreply@auramatics.tech>",
} as const;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email notification when a contact form is submitted
 * @param formData - The form data from the contact form
 * @returns Promise<EmailResponse> - Success status and message
 */
export const sendContactFormEmail = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn(
        "⚠️ RESEND_API_KEY not found. Falling back to console logging."
      );
      return await simulateEmailSending(formData);
    }

    // Create the email content
    const emailContent = createEmailContent(formData);
    const htmlContent = createHtmlEmailContent(formData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: [EMAIL_CONFIG.recipient],
      subject: EMAIL_CONFIG.subject,
      text: emailContent,
      html: htmlContent,
      replyTo: formData.email, // Allow replies to go to the form submitter
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return {
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again.",
      };
    }

    console.log("✅ Email sent successfully:", data);
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again.",
    };
  }
};

/**
 * Creates formatted email content from form data
 * @param formData - The form data
 * @returns string - Formatted email content
 */
const createEmailContent = (formData: ContactFormData): string => {
  const { name, email, company, subject, message } = formData;

  return `
New Contact Form Submission - AURAMATICS

Contact Details:
================
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Subject: ${subject}

Message:
========
${message}

---
This message was sent from the AURAMATICS contact form.
Timestamp: ${new Date().toLocaleString()}
  `.trim();
};

/**
 * Creates HTML formatted email content from form data
 * @param formData - The form data
 * @returns string - HTML formatted email content
 */
const createHtmlEmailContent = (formData: ContactFormData): string => {
  const { name, email, company, subject, message } = formData;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - AURAMATICS</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2596be, #011632); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #011632; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #2596be; }
    .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2596be; white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h1>📧 New Contact Form Submission</h1>
    <p>AURAMATICS Website</p>
  </div>
  
  <div class="content">
    <div class="field">
      <div class="label">👤 Name:</div>
      <div class="value">${name}</div>
    </div>
    
    <div class="field">
      <div class="label">📧 Email:</div>
      <div class="value">${email}</div>
    </div>
    
    <div class="field">
      <div class="label">🏢 Company:</div>
      <div class="value">${company || "Not provided"}</div>
    </div>
    
    <div class="field">
      <div class="label">📝 Subject:</div>
      <div class="value">${subject}</div>
    </div>
    
    <div class="field">
      <div class="label">💬 Message:</div>
      <div class="message-box">${message}</div>
    </div>
  </div>
  
  <div class="footer">
    <p>This message was sent from the AURAMATICS contact form.</p>
    <p>Timestamp: ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>
  `.trim();
};

/**
 * Simulates email sending when Resend API key is not configured
 * This is used as a fallback for development/testing
 */
const simulateEmailSending = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Log the email content for development
  const emailContent = createEmailContent(formData);
  console.log(
    "📧 [SIMULATION] Email would be sent to:",
    EMAIL_CONFIG.recipient
  );
  console.log("📧 [SIMULATION] Email subject:", EMAIL_CONFIG.subject);
  console.log("📧 [SIMULATION] Email content:", emailContent);

  return {
    success: true,
    message:
      "Thank you for your message! We'll get back to you soon. (Simulation mode)",
  };
};

/**
 * Validates form data before sending email
 * @param formData - The form data to validate
 * @returns boolean - Whether the data is valid
 */
export const validateContactForm = (formData: ContactFormData): boolean => {
  const { name, email, subject, message } = formData;

  // Basic validation
  if (!name || name.trim().length < 2) {
    return false;
  }

  if (!email || !isValidEmail(email)) {
    return false;
  }

  if (!subject || subject.trim().length < 3) {
    return false;
  }

  if (!message || message.trim().length < 10) {
    return false;
  }

  return true;
};

/**
 * Validates email format
 * @param email - Email address to validate
 * @returns boolean - Whether the email is valid
 */
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Gets email configuration
 * @returns Email configuration object
 */
export const getEmailConfig = () => EMAIL_CONFIG;

// Export types for use in other files
export type { ContactFormData, EmailResponse };
