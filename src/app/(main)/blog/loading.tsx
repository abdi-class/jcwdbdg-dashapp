export default function LoadingBlog() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Loading news...</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="border rounded-lg shadow animate-pulse overflow-hidden"
          >
            {/* Fake image */}
            <div className="bg-red-300 h-48 w-full" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
