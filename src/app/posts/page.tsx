import AllBlogPosts from "@/components/AllBlogPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "A collection of all blog posts.",
};

const AllPosts = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const searchParamsAwaited = await searchParams;
  const currentPage = Number(searchParamsAwaited.page) || 1;
  return <AllBlogPosts currentPage={currentPage} />;
};

export default AllPosts;
