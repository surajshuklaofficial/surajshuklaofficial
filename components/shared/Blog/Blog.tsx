import Link from "next/link";
import { BlogMeta } from "./BlogMeta";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export function Blog({ postItem }: { postItem: any }) {
  const {
    Title,
    Slug,
    Thumbnail,
    Status,
    'Published Date': PublishedDate,
    URL,
    Category,
    Views,
    Description
  } = postItem.properties;

  const title = Title?.title[0]?.plain_text || "Untitled";
  const slug = Slug?.rich_text[0]?.plain_text || "";
  const description = Description?.rich_text[0]?.plain_text || "";
  return (
    <Link href={`/blog/${slug}`}>
    <Card className="flex h-full justify-start items-center">
        <CardHeader className="gap-4 flex-center">
          <Image
            src={Thumbnail.files[0]?.file?.url}
            alt={title}
            className="rounded object-cover"
            width={200}
            height={100}
          />
        </CardHeader>
        <CardContent className="flex flex-col py-8 justify-between h-full">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <BlogMeta
              publishedDate={PublishedDate?.date?.start}
              status={Status?.select?.name}
              categories={Category?.multi_select}
              views={Views?.number}
          />
        </CardContent>
      </Card>
    </Link>
  );
}