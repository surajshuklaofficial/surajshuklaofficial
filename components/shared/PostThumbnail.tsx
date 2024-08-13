import Image from "next/image";

export default function PostThumbnail({ thumbnail, title }: { thumbnail: any, title: string }) {
  if (!thumbnail?.files[0]?.file?.url) return null;

  return (
    <div className="post-thumbnail-wrapper mb-4">
      <Image
        src={thumbnail.files[0].file.url}
        alt={title}
        className="post-thumbnail rounded-lg object-cover"
        width={400}
        height={200}
        layout="responsive"
      />
    </div>
  );
}
