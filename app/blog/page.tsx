import { getPages } from "@/lib/notion";
import Post from "@/components/shared/Post";

export default async function PostList() {
  const post: any = await getPages();

  return (
    <div className="post-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {post.results.map((postItem: any) => (
        <Post key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
}
