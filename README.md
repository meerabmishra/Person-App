# Person App (OAuth Secured)

This repository is a Week 5 deliverable scaffold for the "Person App" enhanced with OAuth (Auth.js / NextAuth v5) using the Google provider.

What is included:
- Next.js App Router scaffold
- Mongoose models for MongoDB (User and Person)
- Auth.js configuration wiring for Google OAuth (edge runtime handler)
- Protected pages and API routes for Person CRUD
- MCP server endpoint protected by session
- Documentation pages: `/auth-setup`, `/security`, `/github`, `/about`

Important steps to complete locally and deploy:

1. Copy `.env.example` to `.env.local` and fill in `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`, and `DATABASE_URL`.
	- For local MongoDB you can use: `mongodb://localhost:27017/person-app`

2. Install dependencies:

```powershell
npm install --legacy-peer-deps
```

3. Database setup (MongoDB with Mongoose):
	- Set `DATABASE_URL` in `.env.local` to your MongoDB connection string (example for local MongoDB):
	  `mongodb://localhost:27017/person-app`
	- There are no Prisma migrations to run. Mongoose will create collections automatically when the app runs.

4. Run the dev server:

```powershell
npm run dev
```

5. Create OAuth credentials in Google Cloud Console: add the redirect URI for Vercel and local dev (for local dev use `http://localhost:3000/api/auth/callback/google`).

6. Deploy to Vercel and add the environment variables in the Vercel project settings (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`, `DATABASE_URL`).

Notes and next steps:
- This scaffold uses Auth.js (NextAuth v5) APIs. You may need to adjust package versions to match current Auth.js releases.
- After pushing to GitHub and deploying to Vercel, paste the production URL in the `/github` page and use that single URL for submission.
