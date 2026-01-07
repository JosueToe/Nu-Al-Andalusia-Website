# Nu Al Andalusia Website - Setup Guide

## Features Implemented

### 1. Contact Form with EmailJS
- Contact form integrated with EmailJS for sending emails
- Form validation and error handling
- Success/error status messages

### 2. Volunteer Authentication
- NextAuth.js integration for secure volunteer login
- Credential-based authentication
- Protected volunteer dashboard

### 3. News & Updates Management
- Volunteer dashboard for creating and managing news posts
- Full CRUD operations (Create, Read, Update, Delete)
- Public news page displaying published posts
- Individual post pages

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Volunteer Login Credentials
VOLUNTEER_USERNAME=volunteer
VOLUNTEER_PASSWORD=password123

# EmailJS Configuration
# Get these from https://www.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

### 4. Generate NextAuth Secret

For production, generate a secure secret:

```bash
openssl rand -base64 32
```

Add this to your `.env.local` as `NEXTAUTH_SECRET`.

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Usage

### Volunteer Login

1. Navigate to `/volunteer/login`
2. Use the credentials from your `.env.local` file
3. Default credentials:
   - Username: `volunteer`
   - Password: `password123`

### Managing News Posts

1. Log in to the volunteer dashboard
2. Click "Create New Post" to add a new article
3. Fill in the form:
   - Title (required)
   - Excerpt/Summary (required)
   - Content (required)
   - Author (required)
   - Image URL (optional)
   - Publish immediately checkbox
4. Click "Save Post"
5. View all posts in the "All Posts" tab
6. Edit or delete posts as needed

### Contact Form

1. Visitors can fill out the contact form on `/contact`
2. Form submissions are sent via EmailJS to the configured email address
3. Success/error messages are displayed to users

## File Structure

```
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts  # NextAuth configuration
│   │   └── news/                        # News API routes
│   ├── volunteer/
│   │   ├── login/page.tsx               # Volunteer login page
│   │   └── dashboard/                   # Volunteer dashboard
│   ├── news/
│   │   ├── page.tsx                     # Public news listing
│   │   └── [id]/page.tsx                # Individual post page
│   └── contact/
│       └── page.tsx                      # Contact page
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx              # EmailJS contact form
│   └── volunteer/
│       ├── NewsEditor.tsx               # Post editor
│       └── NewsList.tsx                 # Posts list
└── data/
    └── news.json                         # News posts storage (auto-created)
```

## Data Storage

News posts are stored in `data/news.json`. This file is automatically created when the first post is saved. For production, consider migrating to a database (PostgreSQL, MongoDB, etc.).

## Security Notes

- Change default volunteer credentials in production
- Use a strong `NEXTAUTH_SECRET` in production
- Consider implementing password hashing for volunteer accounts
- Add rate limiting for API routes
- Implement proper error handling and logging

## Production Deployment

1. Set all environment variables in your hosting platform
2. Ensure `NEXTAUTH_URL` matches your production domain
3. Use a secure `NEXTAUTH_SECRET`
4. Consider migrating news storage to a database
5. Set up proper error monitoring

## Support

For issues or questions, contact the development team.

