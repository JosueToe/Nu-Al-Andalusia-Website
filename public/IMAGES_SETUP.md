# Images Setup Guide

## Required Images

Please add the following images to the `public/` folder:

### 1. State Flag (Hero Section)
- **Filename:** `state-flag.jpg` (or .png, .webp)
- **Location:** `public/state-flag.jpg`
- **Usage:** Hero section background image
- **Recommended Size:** 1920x1080px or larger (landscape orientation)

### 2. Seal (Logo & Favicon)
- **Filename:** `seal.png` (or .svg, .jpg)
- **Location:** `public/seal.png`
- **Usage:** 
  - Header logo
  - Favicon (will be automatically converted)
- **Recommended Size:** 
  - For logo: 200x200px minimum (square)
  - For favicon: 512x512px (will be resized automatically)
- **Format:** PNG with transparent background preferred, or SVG

## Favicon Files

Once you add `seal.png`, the system will automatically use it for:
- Browser tab icon (favicon.ico)
- Apple touch icon
- Android icon

## Current Setup

The code is configured to look for:
- Hero background: `/state-flag.jpg`
- Logo: `/seal.png`
- Favicon: `/seal.png` (automatically converted)

## Fallback

If images are not found, the system will use:
- Hero: Current background image
- Logo: Current star icon
- Favicon: Default Next.js favicon

