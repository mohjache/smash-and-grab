# Smash and Grab
Create a matchmaking ELO calculator for badminton

## Tech Stack
- Nextjs deployed on Vercel .
- Domains and DNS also through Vercel.
- Convex for state management, async tasks, db.
- Clerk for Auth.
- Shadcn for UI theming and components built on top of Tailwind

## Getting Started
You will need to setup your own convex and clerk instances locally and find the necessary variables used:

```
CONVEX_DEPLOYMENT=
CONVEX_DEPLOY_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_FRONTEND_API_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_REDIRECT_AFTER_SIGNOUT_URL=/
```

You will need to store these env variables inside of convex
```
CLERK_FRONTEND_API_URL
CLERK_WEBHOOK_SECRET
```

Once setup you should be able to run ```pnpm run dev``` and start.

##  Todo list

- [ ] Make it deploy.
- [ ] Added landing page that doesn't need auth.
- [ ] Scaffold basic UI with mock data.
- [ ] Attach database to UI.
- [ ] Add authentication.
- [ ] Add Top Nav.