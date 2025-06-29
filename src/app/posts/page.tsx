import AllBlogPosts from "../components/AllBlogPosts";

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
