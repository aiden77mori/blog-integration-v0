export default function Loading() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <aside className="w-48 bg-white shadow-md flex flex-col h-screen">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="space-y-1 p-4 pt-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-full h-8 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 md:p-6 space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="relative mb-4">
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        <div className="flex-1 overflow-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg border shadow-sm p-4 animate-pulse">
                <div className="flex flex-col items-center text-center space-y-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-200 rounded" />
                  <div className="h-3 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 md:p-6 border-t">
          <div className="flex justify-center items-center space-x-2">
            <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  )
}
