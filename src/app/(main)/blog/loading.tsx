export default function LoadingBlog() {
  const printLoadingContent = () => {
    const fakeArray = [...Array(4)];

    return fakeArray.map((value, index) => {
      return (
        <div
          key={index}
          className="shadow rounded-lg animate-pulse overflow-hidden"
        >
          {/* Fake Image */}
          <div className="bg-slate-200 h-48 w-full mb-3"></div>
          {/* Fake Title */}
          <div className="h-4 bg-slate-200 w-3/4"></div>
        </div>
      );
    });
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Loading news...</h1>
      <div className="grid grid-cols-2 gap-6">{printLoadingContent()}</div>
    </div>
  );
}
