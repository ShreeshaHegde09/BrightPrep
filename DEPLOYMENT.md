# Deployment Guide

## Environment Variables Required

### Firebase Configuration
```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY=your-private-key
```

### Firebase Client Config (for client-side)
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### Google AI Configuration
```env
GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-api-key
```

### VAPI Configuration
```env
VAPI_API_KEY=your-vapi-api-key
```

## Vercel Deployment Steps

1. **Set Environment Variables**: Add all the above environment variables in your Vercel project settings
2. **Build Command**: `npm run build`
3. **Output Directory**: `.next`
4. **Install Command**: `npm install`

## Common Issues and Solutions

### 1. Login Not Working
- Ensure all Firebase environment variables are set correctly
- Check that the Firebase project has Authentication enabled
- Verify that Email/Password authentication is enabled in Firebase Console

### 2. VAPI Workflow Not Connecting
- Ensure `VAPI_API_KEY` is set in environment variables
- Check that the VAPI workflow is properly configured
- Verify the API endpoint is accessible from Vercel

### 3. Tech Icons Not Showing
- The logos are now included in the `/public/logos/` directory
- If custom logos are needed, add them to the `public/logos/` directory

### 4. Build Errors
- Ensure all dependencies are properly installed
- Check that all environment variables are set
- Verify Firebase configuration is correct

## Local Development

1. Copy the environment variables to `.env.local`
2. Run `npm install`
3. Run `npm run dev`
4. Access the application at `http://localhost:3000`

## Firebase Setup

1. Create a Firebase project
2. Enable Authentication with Email/Password
3. Create a Firestore database
4. Generate service account key
5. Add the configuration to environment variables 