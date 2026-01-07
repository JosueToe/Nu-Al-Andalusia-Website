# EmailJS Setup Guide for Nu Al Andalusia Contact Form

This guide will walk you through setting up EmailJS to handle contact form submissions.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** in the top right corner
3. Sign up using:
   - Email and password, OR
   - Google account, OR
   - GitHub account
4. Verify your email address if required

## Step 2: Add an Email Service

1. Once logged in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP** (for other providers)
4. Follow the setup instructions for your chosen provider:

### For Gmail:
   - Click **"Connect Account"**
   - Sign in with your Gmail account
   - Grant EmailJS permission to send emails
   - Your service will be created automatically

### For Outlook:
   - Click **"Connect Account"**
   - Sign in with your Outlook/Microsoft account
   - Grant EmailJS permission
   - Service will be created

### For Custom SMTP:
   - Enter your SMTP server details:
     - Host: `smtp.yourprovider.com`
     - Port: `587` (or `465` for SSL)
     - Username: Your email address
     - Password: Your email password
   - Click **"Create Service"**

5. **Copy your Service ID** - You'll see it displayed (e.g., `service_abc123`)
   - Save this for later!

## Step 3: Create an Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Fill in the template details:

### Template Settings:
   - **Template Name**: `Contact Form Submission` (or any name you prefer)
   - **Subject**: `New Contact Form Submission from {{from_name}}`
   - **Content**: Use the template below

### Email Template Content:

Copy and paste this template into the content area:

```
Hello,

You have received a new contact form submission from the Nu Al Andalusia website.

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Nu Al Andalusia contact form.
Reply to: {{from_email}}
```

### Template Variables:
Make sure these variables are included (they should match exactly):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone (optional)
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (optional, can be hardcoded)

4. **Set the recipient email**:
   - In the template settings, find **"To Email"** or **"To Name"**
   - Enter: `contact@nualandalusia.com` (or your desired email)
   - OR leave it blank and use `{{to_email}}` variable

5. Click **"Save"**

6. **Copy your Template ID** - You'll see it displayed (e.g., `template_xyz789`)
   - Save this for later!

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar (or click your profile icon)
2. Navigate to **"General"** or **"API Keys"** section
3. Find your **Public Key** (also called API Key)
   - It will look like: `abcdefghijklmnop` (a long string)
4. **Copy your Public Key**
   - Save this for later!

## Step 5: Add Credentials to Your Project

1. In your project root directory, create or open `.env.local` file
2. Add the following variables with your actual values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

**Replace the values:**
- `service_abc123` → Your actual Service ID from Step 2
- `template_xyz789` → Your actual Template ID from Step 3
- `abcdefghijklmnop` → Your actual Public Key from Step 4

### Example:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123def456ghi789
```

## Step 6: Test Your Setup

1. Make sure your development server is running:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contact`

3. Fill out the contact form with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Phone: (optional)
   - Subject: Test Message
   - Message: This is a test message

4. Click **"Send Message"**

5. Check:
   - ✅ You should see a success message on the form
   - ✅ Check your email inbox (the one you set as recipient)
   - ✅ You should receive the email with the form data

## Troubleshooting

### Email not received?
1. **Check spam/junk folder** - Emails might be filtered
2. **Verify recipient email** - Make sure it's correct in the template
3. **Check EmailJS dashboard** - Go to "Logs" to see if emails were sent
4. **Verify environment variables** - Make sure they're in `.env.local` and the server was restarted

### "EmailJS configuration is missing" error?
1. Make sure `.env.local` file exists in the root directory
2. Verify all three variables are set:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. **Restart your development server** after adding environment variables:
   ```bash
   # Stop the server (Ctrl+C)
   # Then restart:
   npm run dev
   ```

### "Failed to send message" error?
1. Check EmailJS dashboard for error logs
2. Verify your email service is connected properly
3. Make sure your template variables match exactly (case-sensitive)
4. Check if you've exceeded the free tier limit (200 emails/month)

## EmailJS Free Tier Limits

- **200 emails per month** (free tier)
- **Upgrade to paid plans** for more emails if needed
- Check your usage in the EmailJS dashboard

## Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. Add the same environment variables in your hosting platform:
   - Go to your hosting platform's dashboard
   - Find "Environment Variables" or "Env Vars" section
   - Add all three EmailJS variables

2. **Important**: Make sure `NEXT_PUBLIC_` prefix is included for client-side variables

3. Redeploy your application after adding variables

## Security Notes

- ✅ Your Public Key is safe to expose (it's meant to be public)
- ✅ Never share your email service password
- ✅ Consider rate limiting on the contact form in production
- ✅ EmailJS handles email sending securely

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their support section in the dashboard
- Check the contact form code in: `components/contact/ContactForm.tsx`

---

**Quick Checklist:**
- [ ] EmailJS account created
- [ ] Email service added (Service ID copied)
- [ ] Email template created (Template ID copied)
- [ ] Public Key copied
- [ ] All three values added to `.env.local`
- [ ] Development server restarted
- [ ] Test email sent successfully

