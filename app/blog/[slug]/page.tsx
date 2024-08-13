import { getPageContent, getPageBySlug, notionClient } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import "@notion-render/client/sass/theme.scss"

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
// import { Post } from "@/components/post";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("Slug: ", params);
  const post = await getPageBySlug(params.slug);

  //Redirect to not found page!
  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}