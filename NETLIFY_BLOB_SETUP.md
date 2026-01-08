# Netlify Blob Storage Setup

## Overview

News posts are now stored using **Netlify Blob Storage**, which provides persistent storage for your data. Unlike the previous `/tmp` approach, data stored in Netlify Blob persists across function invocations and deployments.

## How It Works

1. **Automatic Setup**: Netlify Blob storage is automatically available when you deploy to Netlify. No additional configuration is needed.

2. **Storage Location**: Posts are stored in a blob store named `news-posts` with a key `posts`.

3. **Data Format**: Posts are stored as JSON arrays, just like before, but now they persist permanently.

## What Changed

### API Routes Updated
- `app/api/news/route.ts` - Now uses `getStore()` from `@netlify/blobs`
- `app/api/news/[id]/route.ts` - Updated to use blob storage for individual post operations

### Dependencies Added
- `@netlify/blobs` - Netlify's blob storage SDK

## Deployment

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Deploy to Netlify**:
   - Push your changes to GitHub
   - Netlify will automatically build and deploy
   - Blob storage will be automatically configured

## Usage

No changes needed in how you use the volunteer dashboard:
- Create posts as usual
- Edit posts as usual
- Delete posts as usual

All posts will now persist permanently, even after function restarts or deployments.

## Important Notes

- **Image Storage**: Images are still stored as URLs (base64 data URLs or external URLs). For production, consider using a dedicated image hosting service like:
  - Imgur
  - Cloudinary
  - AWS S3
  - Netlify Blob (for images too)

- **Data Migration**: If you had posts in the old `/tmp` storage, they won't automatically migrate. You'll need to recreate them through the dashboard.

## Troubleshooting

If you encounter issues:

1. **Check Netlify Dashboard**: Go to your Netlify site dashboard → Functions → Blobs to see your blob stores
2. **Check Logs**: Review Netlify function logs for any errors
3. **Verify Package**: Ensure `@netlify/blobs` is installed in `package.json`

## Next Steps

For production, consider:
- Setting up a proper database (Supabase, MongoDB, etc.) for more complex queries
- Using Netlify Blob for image storage as well
- Implementing backup strategies for your data

