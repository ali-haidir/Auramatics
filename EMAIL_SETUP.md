# Email Setup Guide

This guide explains how the email functionality works for the AURAMATICS contact form.

## Email Functionality

The contact form uses a **mailto** approach for maximum compatibility with static hosting:

1. **User fills out the contact form**
2. **Form data is formatted into an email body**
3. **User's default email client opens with pre-filled message**
4. **User sends the email to `jonpeter301@gmail.com`**

## Benefits of This Approach

- ✅ **No server required** - Works with static hosting
- ✅ **No API keys needed** - No external dependencies
- ✅ **Universal compatibility** - Works on all devices and browsers
- ✅ **Privacy friendly** - No data sent to external services
- ✅ **Reliable** - Uses native email functionality

## How It Works

When a user submits the contact form:

1. The form data is collected and validated
2. A mailto link is generated with:
   - **To**: `jonpeter301@gmail.com`
   - **Subject**: "New Contact Form Submission - AURAMATICS"
   - **Body**: Formatted with all form fields
3. The user's default email client opens
4. The user can review and send the email

## Testing

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Your email client should open with a pre-filled message
5. Send the email to complete the process

## Production Deployment

This approach works perfectly with:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

No additional configuration is needed for production deployment.

## Alternative: Server-Side Email (Optional)

If you prefer server-side email sending, you can:

1. Set up a server (Node.js, Python, etc.)
2. Create an API endpoint to handle form submissions
3. Use services like Resend, SendGrid, or Nodemailer
4. Update the contact form to POST to your API endpoint

However, the current mailto approach is recommended for simplicity and reliability.
