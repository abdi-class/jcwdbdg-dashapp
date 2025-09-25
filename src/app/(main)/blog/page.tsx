import * as React from "react";
import { getNewsHeadline } from "@/lib/newsapi";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await getNewsHeadline();

  const printNews = () => {
    return articles.map((value, index) => {
      return (
        <Link
          key={index}
          href={`/blog/${value.title}`}
          target="_blank"
          className="border rounded-lg shadow hover:shadow-lg overflow-hidden"
        >
          <div>
            <img
              src={value.urlToImage}
              alt={value.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold">{value.title}</h2>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
      <div className="grid grid-cols-2 gap-6">{printNews()}</div>
    </div>
  );
}
