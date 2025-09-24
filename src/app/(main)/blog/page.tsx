import { getNewsHeadline } from "@/lib/newsapi";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await getNewsHeadline();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Latest News (Server Fetch)</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={`/blog/${article.title}`}
            target="_blank"
            className="border rounded-lg shadow hover:shadow-lg overflow-hidden"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg">{article.title}</h2>
              <p className="text-sm text-gray-600">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
