import { getPages } from "@/lib/notion";

export default async function Page() {
  const post: any = await getPages();

  console.log("hi",post.results[0]?.properties)

  return (
    <div>
        {post.results.map(() => <>hi</>)}
    </div>
  );
}