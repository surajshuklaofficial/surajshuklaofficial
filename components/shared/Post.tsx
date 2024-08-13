import Link from "next/link";
import PostThumbnail from "@/components/shared/PostThumbnail";
import PostMeta from "@/components/shared/PostMeta";

export default function Post({ postItem }: { postItem: any }) {
  const {
    Title,
    Slug,
    Thumbnail,
    Status,
    'Published Date': PublishedDate,
    URL,
    Category,
    Views,
  } = postItem.properties;

  const postTitle = Title?.title[0]?.plain_text || "Untitled";
  const postSlug = Slug?.rich_text[0]?.plain_text || "";

  return (
    <div className="post border rounded-lg shadow-lg p-6 mb-8 bg-white hover:bg-gray-50 transition duration-300">
      <PostThumbnail thumbnail={Thumbnail} title={postTitle} />

      <Link href={`/blog/${postSlug}`} passHref>
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
          {postTitle}
        </h2>
      </Link>

      <PostMeta
        publishedDate={PublishedDate?.date?.start}
        status={Status?.select?.name}
        categories={Category?.multi_select}
        views={Views?.number}
      />

      {URL?.url && (
        <a
          href={URL.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Read More
        </a>
      )}
    </div>
  );
}
