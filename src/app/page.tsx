import Hero from "@/app/components/Hero";
import RecentPosts from "@/app/components/RecentPosts";
import AllBlogPosts from "@/app/components/AllBlogPosts";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParamsAwaited = await searchParams;
  const currentPage = Number(searchParamsAwaited.page) || 1;
  return (
    <main>
      <Hero />
      <RecentPosts />
      <AllBlogPosts currentPage={currentPage} />
      <Link
        href="/posts"
        className="block w-fit my-4 mx-auto bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded-md ">
        All Posts
      </Link>
    </main>
  );
}
