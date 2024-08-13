import { getPageContent, getPageBySlug, notionClient } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import "@notion-render/client/sass/theme.scss"

 
export async function generateMetadata(
  { params }: {params: { slug: string }},
  parent: ResolvingMetadata
): Promise<Metadata> { 
  // fetch data
  const post: any = await getPageBySlug(params.slug);

  const { Title, Description } = post.properties;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  const title = Title?.title[0]?.plain_text || "Untitled";
  const description = Description?.rich_text[0]?.plain_text || "";

  return {
    title: title,
    description: description
  }
}

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Metadata, ResolvingMetadata } from "next";

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