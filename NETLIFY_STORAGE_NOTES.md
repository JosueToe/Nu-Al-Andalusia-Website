# Netlify Storage Limitations & Solutions

## Current Issue

Netlify Functions run in a **serverless environment** with a **read-only file system**. This means:

- ❌ Cannot write to `data/` directory
- ❌ Cannot write to `public/uploads/` directory
- ✅ Can write to `/tmp` directory (but it's **ephemeral** - data is lost between function invocations)

## Current Solution (Temporary)

I've updated the code to use `/tmp` directory for news posts storage. **However, this is not ideal** because:

- Data in `/tmp` is **ephemeral** - it gets cleared between function invocations
- Posts may be lost when functions restart
- Not suitable for production

## Recommended Solutions

### Option 1: Use a Database (Recommended)

For production, you should use a database:

#### Supabase (Free tier available)
- PostgreSQL database
- Easy to set up
- Free tier: 500MB database, 2GB bandwidth

#### MongoDB Atlas (Free tier available)
- NoSQL database
- Free tier: 512MB storage

#### PlanetScale (Free tier available)
- MySQL-compatible
- Serverless scaling

### Option 2: Use Cloud Storage for Images

For image uploads, use cloud storage:

#### Cloudinary (Free tier available)
- Image hosting and optimization
- Free tier: 25GB storage, 25GB bandwidth/month

#### AWS S3
- Object storage
- Pay-as-you-go pricing

#### Netlify Blob Storage
- Netlify's own storage solution
- Integrated with Netlify Functions

### Option 3: Use Image URLs Only (Simplest)

For now, volunteers can:
1. Upload images to a service like:
   - Imgur
   - Cloudinary
   - Google Drive (public link)
   - Any image hosting service
2. Copy the image URL
3. Paste it in the "Image URL" field when creating posts

## Current Workaround

The code now:
- ✅ Uses `/tmp` for news posts (works but data may be lost)
- ✅ Returns base64 data URLs for images (works but not ideal for large images)

## Migration Path

When ready to migrate to a database:

1. Choose a database provider (Supabase recommended)
2. Create database schema for news posts
3. Update API routes to use database instead of file system
4. Migrate existing posts (if any)

## Quick Fix for Now

**For images**: Use image URLs instead of uploading files
- Upload images to Imgur, Cloudinary, or similar
- Paste the URL in the post editor

**For news posts**: The `/tmp` solution will work temporarily, but consider migrating to a database soon.

