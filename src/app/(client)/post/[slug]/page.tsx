import { getAllPostsSlugs, getPostBySlug } from "@/sanity/lib/client";
import PostPage from "./Default";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
