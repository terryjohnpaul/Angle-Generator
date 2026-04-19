const MAX = 9

export default function PageHeader({ count }) {
  const allSelected = count === MAX

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
      <div className="flex items-baseline gap-3 mb-1">
        <h1 className="text-4xl font-extrabold tracking-tight text-black">
          Angle Selector
        </h1>
        <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
          by FrameCode
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Select 9 camera angles for your 3x3 grid
      </p>

      {/* Progress bar + counter */}
      <div className="flex items-center gap-4">
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
        <span className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${allSelected ? 'text-black' : 'text-gray-400'}`}>
          {count}
          <span className="text-gray-300 font-normal">/9</span>
        </span>
        {allSelected && (
          <span className="text-xs font-semibold text-black bg-gray-100 px-2 py-0.5 rounded-full">
            Ready
          </span>
        )}
      </div>
    </div>
  )
}
