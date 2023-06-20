<!-- [![Next.js Crash Course Thumbnail](https://img.youtube.com/vi/3SyJUpo3Sic/0.jpg)](https://www.youtube.com/watch?v=3SyJUpo3Sic) -->

This is the source for a demo app used in my [Next.js Crash Course YouTube Video](https://youtu.be/3SyJUpo3Sic). This video highlights all of the major features and changes that come with the App Router (stable as of version 13.4)

- React Server Components
- Nested Routes & Layouts
- Simplified Data Fetching
- Streaming & Suspense

## Appwrite Setup

Appwrite (backend as a service platform) is the sponsor of this video and demo. We use Appwrite to store event data that we query from Next.js to demo React Server Components, asynchronous data fetching, and loading states!

To follow along with this demo, you'll need to create a [free cloud account with Appwrite](https://cloud.appwrite.io/), create a new project, and a database. Your `events` collection model will look like this.

```
name - string
description - string
date - date
```

You'll then need to make a copy of the `.env.example` file as `.env` in the root of the directory and fill in the necessary details.

```
APPWRITE_PROJECT_ID=
APPWRITE_ENDPOINT=
APPWRITE_EVENTS_COLLECTION_ID=
APPWRITE_DATABASE_ID=
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
