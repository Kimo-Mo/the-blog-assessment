import Hero from "@/app/components/Hero";
import RecentPosts from "@/app/components/RecentPosts";
import AllBlogPosts from "@/app/components/AllBlogPosts";

export default function Home() {

  return (
    <main>
      <Hero />
      <RecentPosts />
      <AllBlogPosts />
    </main>
  );
}
