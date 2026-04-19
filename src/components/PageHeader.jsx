const MAX = 9

export default function PageHeader({ count }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
      {/* Left-aligned editorial header */}
      <div className="flex items-baseline gap-3 mb-1">
        <h1 className="text-4xl font-extrabold tracking-tight text-black">
          Angle Selector
        </h1>
        <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
          by FrameCode
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Select 9 camera angles to generate a cinematic prompt for your 3×3 content grid
      </p>

      {/* Progress bar + counter */}
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          {Array.from({ length: MAX }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i < count ? 'bg-black w-7' : 'bg-gray-200 w-5'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-black tabular-nums">
          {count}
          <span className="text-gray-300 font-normal">/9</span>
        </span>
      </div>
    </div>
  )
}
