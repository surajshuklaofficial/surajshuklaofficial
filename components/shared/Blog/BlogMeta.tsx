import { Badge } from "@/components/ui/badge";
import { timeAgo } from "@/lib/utils";

export function BlogMeta({
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
    <div>
      <div className="flex text-xs">
        <p>
          <span>{views}</span> views ·&nbsp;
        </p>

        {publishedDate && (<span className="published-date">{timeAgo(publishedDate)}</span>)}
      </div>
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categories.map((cat: any) => (
              <span key={cat.name} className="text-xs text-gray-500">#{cat.name}</span>
          ))}
        </div>
      )}
    </div>
  );
}
