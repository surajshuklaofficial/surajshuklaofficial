import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function timeAgo(publishDate: string): string {
  const now = new Date();
  const published = new Date(publishDate);

  const diffInSeconds = Math.floor((now.getTime() - published.getTime()) / 1000);

  const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }

  const months = Math.floor(diffInSeconds / (3600 * 24 * 30));
  if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }

  const days = Math.floor(diffInSeconds / (3600 * 24));
  if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }

  const hours = Math.floor(diffInSeconds / 3600);
  if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  }

  return "Now";
}
