# EmailJS Integration Setup Guide

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)

## 5. Update Environment Variables
Update your `.env.local` file with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

## 6. Test the Integration
1. Restart your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Used
The following variables are available in your email template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company
- `{{phone}}` - User's phone number
- `{{inquiry_type}}` - Type of inquiry
- `{{subject}}` - Email subject
- `{{message}}` - User's message
- `{{to_email}}` - Your business email (info@cmdcybr.com.au)
- `{{reply_to}}` - User's email for replies

## Troubleshooting
- Make sure all environment variables are set correctly
- Check that your email service is properly configured
- Verify the template ID matches your created template
- Check browser console for any error messages

## Security Notes
- The public key is safe to expose in client-side code
- EmailJS handles the email sending securely
- No server-side email configuration needed
- Free tier allows 200 emails per month
