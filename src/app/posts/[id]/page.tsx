
import { getMockedPostById } from "@/app/lib/getMockedPosts";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PostPageParams {
  id: string;
}
type PageProps = {
  params: Promise<PostPageParams>;
};
export async function generateMetadata({
  params,
} : PageProps): Promise<Metadata> {
  const postId = await params;
  const post = await getMockedPostById(Number(postId.id));
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.body.substring(0, 160),
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const postId = await params;
  const post = await getMockedPostById(Number(postId.id));

  if (!post) return notFound();

  return (
    <main className="pb-4">
      <p className="text-[#6941C6]">
        {post.author} • {post.date}
      </p>
      <h2 className="font-semibold text-2xl mb-8 mt-4">{post.title}</h2>
      <Image
        priority={false}
        loading="lazy"
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-80 sm:h-90 object-cover mb-6"
      />
      <div className="flex flex-col gap-3 my-4">
        <p className="text-[#667085] dark:text-[#c0c5d0]">{post.body}</p>
        <p className="text-[#667085] dark:text-[#c0c5d0]">{post.body}</p>
      </div>
      <Image
        priority={false}
        loading="lazy"
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-80 sm:h-90 object-cover mb-6"
      />
      <div className="flex flex-col gap-3 my-4">
        <p className="text-[#667085] dark:text-[#c0c5d0]">{post.body}</p>
        <p className="text-[#667085] dark:text-[#c0c5d0]">{post.body}</p>
        <p className="text-[#667085] dark:text-[#c0c5d0]">{post.body}</p>
        <span className="text-[#6941C6] py-[2px] px-[10px] bg-[#F9F5FF] rounded-2xl w-fit">
          {post.category}
        </span>
      </div>
    </main>
  );
}
