# NextAuth Configuration Guide

## Complete .env.local File

Add this complete content to your `.env.local` file in the project root:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=3IecWdDCe/m7qSiBm9abflBnTT9D2Lkq992eofOsnD8=

# Volunteer Login Credentials
VOLUNTEER_USERNAME=volunteer
VOLUNTEER_PASSWORD=password123

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bqvnxkq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_0uxu54l
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=A8x_40nGsGOjN_0k-
```

## What Each Variable Does

### NEXTAUTH_URL
- **Development**: `http://localhost:3000`
- **Production**: Your actual domain (e.g., `https://nualandalusia.com`)
- This tells NextAuth where your app is hosted

### NEXTAUTH_SECRET
- **Your secret**: `3IecWdDCe/m7qSiBm9abflBnTT9D2Lkq992eofOsnD8=`
- Used to encrypt JWT tokens and session data
- **Keep this secret!** Never commit it to Git
- Already in `.gitignore` so it won't be committed

### VOLUNTEER_USERNAME & VOLUNTEER_PASSWORD
- Default credentials for volunteer login
- **Change these in production!**
- Current defaults:
  - Username: `volunteer`
  - Password: `password123`

## Next Steps

1. **Create/Update `.env.local`** with the content above
2. **Restart your development server**:
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```
3. **Test volunteer login**:
   - Go to `http://localhost:3000/volunteer/login`
   - Use credentials: `volunteer` / `password123`
   - You should be able to log in and access the dashboard

## For Production Deployment

When deploying to production (Netlify, Vercel, etc.):

1. **Update NEXTAUTH_URL** to your production domain:
   ```env
   NEXTAUTH_URL=https://nualandalusia.com
   ```

2. **Keep the same NEXTAUTH_SECRET** (or generate a new one if preferred)

3. **Change volunteer credentials** to something secure:
   ```env
   VOLUNTEER_USERNAME=your_secure_username
   VOLUNTEER_PASSWORD=your_secure_password
   ```

4. **Add all environment variables** in your hosting platform's dashboard:
   - Netlify: Site Settings → Environment Variables
   - Vercel: Project Settings → Environment Variables

## Security Notes

✅ **Good practices:**
- Your `.env.local` is already in `.gitignore` (won't be committed)
- The secret you provided is secure and random
- Change default volunteer password before going live

⚠️ **Important:**
- Never share your `NEXTAUTH_SECRET` publicly
- Use strong passwords for volunteer accounts in production
- Consider implementing password hashing for better security later

## Testing

After setting up `.env.local`:

1. **Test Contact Form**:
   - Go to `/contact`
   - Submit a test message
   - Check your email inbox

2. **Test Volunteer Login**:
   - Go to `/volunteer/login`
   - Login with: `volunteer` / `password123`
   - Access dashboard at `/volunteer/dashboard`

3. **Test News Management**:
   - Create a news post
   - View it on `/news`
   - Edit/delete posts from dashboard

Everything should be working now! 🎉

