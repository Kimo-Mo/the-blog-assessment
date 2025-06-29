# The Blog

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- Modern Next.js App Router (app directory)
- Mocked blog posts with pagination
- Responsive design with Tailwind CSS
- Client and server components
- Example of dynamic routing and query params
- Easily customizable for your own blog

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `src/app/components/AllBlogPosts.tsx` – Server component for listing posts and pagination
- `src/app/components/PaginationControls.tsx` – Client component for pagination UI
- `src/app/components/PostCard.tsx` – Blog post card UI
- `src/app/lib/getMockedPosts.ts` – Mock data fetching logic
- `src/app/types/post.ts` – TypeScript types for posts

## Pagination

Pagination is handled via query parameters (e.g. `?page=2`). The server component reads the current page from the URL and fetches the correct posts. The pagination controls update the URL and highlight the active page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) – your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.