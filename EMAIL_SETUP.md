# Email Setup with Resend

This project uses Resend for sending contact form emails. Follow these steps to set up email functionality:

## 1. Get Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (starts with `re_`)

## 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Resend API Configuration (for server-side API routes)
RESEND_API_KEY=re_your_api_key_here

# Resend API Configuration (for client-side static export)
NEXT_PUBLIC_RESEND_API_KEY=re_your_api_key_here
```

**Note**: This project uses static export (`output: export`), so we need both environment variables:

- `RESEND_API_KEY`: For server-side API routes (development)
- `NEXT_PUBLIC_RESEND_API_KEY`: For client-side email sending (production/static export)

## 3. Verify Your Domain (Optional)

For production use, you should verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `auramatics.tech`)
3. Follow the DNS verification steps
4. Update the `from` field in `emailService.ts` to use your verified domain

## 4. Test the Integration

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check your email (`jonpeter301@gmail.com`) for the new message

## 5. Static Export Compatibility

This project is configured with `output: export` for static site generation. The email service works in both environments:

### Development Mode:

- Uses server-side API routes (`/api/send-email`)
- Requires `RESEND_API_KEY` environment variable

### Production/Static Export:

- Uses client-side email sending directly to Resend API
- Requires `NEXT_PUBLIC_RESEND_API_KEY` environment variable
- Works with static hosting (GitHub Pages, Netlify, Vercel, etc.)

## 6. Fallback Mode

If no API key is configured, the system will:

- Log email content to the console
- Show a "Simulation mode" message to users
- Still validate and process the form

## Email Features

- **Recipient**: jonpeter301@gmail.com
- **HTML Email**: Beautifully formatted with your brand colors
- **Reply-To**: Set to the form submitter's email
- **Validation**: Full form validation before sending
- **Error Handling**: Graceful error messages

## Troubleshooting

### Common Issues:

1. **"API key not found"**: Make sure `.env.local` exists and contains `RESEND_API_KEY`
2. **"Invalid API key"**: Verify your API key is correct and active
3. **"Domain not verified"**: Use a verified domain or the default Resend domain
4. **Emails not received**: Check spam folder and verify recipient email

### Development vs Production:

- **Development**: Uses simulation mode if no API key
- **Production**: Requires valid Resend API key and verified domain

## Cost

Resend offers:

- **Free tier**: 3,000 emails/month
- **Paid plans**: Starting at $20/month for 50,000 emails

Perfect for contact forms and transactional emails!
