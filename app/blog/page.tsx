import { getPages } from "@/lib/notion";
import { Blog } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Explore insightful articles and updates on the latest trends in UAV technology, software engineering, and startup journeys. Stay informed with our curated collection of expert-written blogs.",
};

export default async function PostList() {
  const post: any = await getPages();

  return (
    <div className="post-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {post.results.map((postItem: any) => (
        <Blog key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
}
