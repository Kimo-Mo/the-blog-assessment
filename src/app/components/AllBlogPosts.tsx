import PaginationControls from "@/app/components/PaginationControls";
import PostCard from "@/app/components/PostCard";
import { getMockedPosts } from "@/app/lib/getMockedPosts";
import { Post } from "@/app/types/post";

type AllBlogPostsProps = {
  currentPage?: number;
};

const POSTS_PER_PAGE = 6;
const TOTAL_POSTS = 100;

export default async function AllBlogPosts({
  currentPage = 1,
}: AllBlogPostsProps) {
  const posts: Post[] = await getMockedPosts(currentPage);

  return (
    <section>
      <h2 className="text-xl font-semibold my-8">All Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)}
      />
    </section>
  );
}
