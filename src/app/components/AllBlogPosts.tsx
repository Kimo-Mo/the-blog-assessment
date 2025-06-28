"use client";

import PaginationControls from "@/app/components/PaginationControls";
import PostCard from "@/app/components/PostCard";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";
import { getMockedPosts } from "@/app/lib/getMockedPosts";
import { useState, useEffect } from "react";
import { Post } from "@/app/types/post";

const AllBlogPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getMockedPosts(currentPage);
      setPosts(posts);
    };
    fetchData();
  }, [currentPage]);
  return posts ? (
    <section>
      <h2 className="text-xl font-semibold my-8">All Blog Posts</h2>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <PaginationControls
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={Math.ceil(100 / 6)}
        />
      </Suspense>
    </section>
  ) : (
    <Loading />
  );
};

export default AllBlogPosts;
