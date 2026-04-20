const MAX = 9

export default function PageHeader({ count }) {
  const hasSelection = count >= 1
  const allSelected = count === MAX

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-baseline gap-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">
            Angle Selector
          </h1>
          <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
            by Terry John
          </span>
        </div>

        {/* Progress bar + counter */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: MAX }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < count ? 'bg-black w-7' : 'bg-gray-200 w-5'
                }`}
              />
            ))}
          </div>
          <span className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${hasSelection ? 'text-black' : 'text-gray-400'}`}>
            {count}
            <span className="text-gray-300 font-normal">/9</span>
          </span>
          {hasSelection && (
            <span className="text-xs font-semibold text-black bg-gray-100 px-2 py-0.5 rounded-full">
              {allSelected ? 'Grid ready' : count === 1 ? 'Single angle' : `${count}-panel grid`}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-400 text-sm">
        Select 1–9 camera angles — single image or grid
      </p>
    </div>
  )
}
