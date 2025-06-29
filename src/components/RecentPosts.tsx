
import PostCard from "./PostCard";
import Loading from "./Loading";
import { Suspense } from "react";
import { getMockedPosts } from "@/lib/getMockedPosts";

const RecentPosts = async() => {
  const posts = await getMockedPosts(1);
  const [post1, post2, post3, post4] = posts.slice(0,4);
  return (
    <section className="my-10">
      <h2 className="text-xl font-semibold my-8">Recent Blog Posts</h2>
      <article className="flex flex-col gap-8">
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-8">
            <PostCard post={post1} variant="large" />
            <PostCard post={post2} dir="horizontal" />
            <PostCard post={post3} dir="horizontal" />
          </div>
            <PostCard post={post4} dir="horizontal" variant="large" />
        </Suspense>
      </article>
    </section>
  );
};

export default RecentPosts;
