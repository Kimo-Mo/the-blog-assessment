import { Post } from "@/types/post";

const categories = ["UI/UX", "Product", "Engineering", "Design", "Leadership"];
const authors = ["Sarah", "Ali", "Kareem", "Mona"];

export async function getMockedPosts(
  page: number = 1,
  limit: number = 6
): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();
  return data.map((post: Post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    image: "https://placehold.co/600x400/WebP?text=Blog+Post&font=roboto",
    category: categories[post.id % categories.length],
    author: authors[post.id % authors.length],
    date: `2024-06-${(post.id % 28) + 1}`,
  }));
}
export async function getMockedPostById(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    id: data.id,
    title: data.title,
    body: data.body,
    image: "https://placehold.co/600x400/WebP?text=Blog+Post&font=roboto",
    category: categories[data.id % categories.length],
    author: authors[data.id % authors.length],
    date: `2024-06-${(data.id % 28) + 1}`,
  };
}
