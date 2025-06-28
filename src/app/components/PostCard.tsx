"use client";
import { Post } from "@/app/types/post";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const PostCard = ({
  post,
  dir = "vertical",
  variant = "small",
}: {
  post: Post;
  dir?: string;
  variant?: string;
}) => {
  return (
    <motion.div
      className={variant === "large" && dir === "vertical" ? "row-span-2" : ""}
      initial={{ opacity: 0, y: 50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}>
      <Link
        href={`/posts/${post.id}`}
        className={`flex flex-col gap-8 items-center sm:items-start ${
          dir === "horizontal" ? "sm:flex-row" : "sm:flex-col"
        } ${variant === "large" ? "" : "h-full"}`}>
        <Image
          priority={false}
          loading="lazy"
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className={`object-cover flex-1 ${
            dir === "horizontal" ? "sm:w-[50%]" : "w-full"
          } ${variant === "large" ? "" : "h-full"}`}
        />
        <div className="flex flex-col gap-3 flex-1">
          <p className="text-[#6941C6]">
            {post.author} • {post.date}
          </p>
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-[#667085] dark:text-[#c0c5d0]">
            {post.body.slice(0, 80)}...
          </p>
          <div className="flex gap-2">
            <span className="text-[#6941C6] py-[2px] px-[10px] bg-[#F9F5FF] rounded-2xl">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
