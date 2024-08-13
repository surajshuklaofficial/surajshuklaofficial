export default function PostMeta({
  publishedDate,
  status,
  categories,
  views,
}: {
  publishedDate: string | null;
  status: string | null;
  categories: any[];
  views: number | null;
}) {
  return (
    <div className="post-meta text-sm text-gray-600 space-y-2 mt-4">
      {publishedDate && (
        <p className="published-date">
          {new Date(publishedDate).toLocaleDateString()}
        </p>
      )}
      {categories.length > 0 && (
        <div className="categories flex flex-wrap gap-2">
          {categories.map((cat: any) => (
            <span
              key={cat.id}
              className="category bg-blue-100 text-blue-800 px-2 py-1 rounded"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}
      {views !== null && (
        <p className="views">
          Views: <span className="font-semibold">{views}</span>
        </p>
      )}
    </div>
  );
}
