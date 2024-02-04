import { getPaginatedPosts } from "@/sanity/lib/client";
import HomePage from "./home";

export default async function IndexPage() {
  const params = {
    pageIndex: 1,
    limit: 14
  };

  const posts = await getPaginatedPosts(params);

  console.log(posts.length, posts)

  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
