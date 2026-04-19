import { useState } from 'react'

export default function AnglePanel({ angle, isSelected, onClose, onToggleSelect, selectionOrder }) {
  const [copied, setCopied] = useState(false)

  const largeImage = angle.image + '?w=600&h=400&fit=crop&auto=format'

  const handleCopy = () => {
    navigator.clipboard.writeText(angle.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed top-14 right-0 bottom-16 w-[30vw] bg-white border-l border-gray-100 z-40 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Angle Detail
        </span>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Image */}
        <div className="relative">
          <img
            src={largeImage}
            alt={angle.name}
            className="w-full h-52 object-cover"
          />
          {isSelected && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black text-white text-xs font-bold px-2.5 py-1 rounded-full">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              #{selectionOrder} in grid
            </div>
          )}
        </div>

        <div className="px-5 py-5 space-y-5">
          {/* Name + description */}
          <div>
            <h2 className="text-lg font-extrabold text-black tracking-tight leading-snug mb-1">
              {angle.name}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {angle.description}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100" />

          {/* Prompt section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                AI Prompt
              </span>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
              <p className="text-xs text-gray-700 font-mono leading-relaxed whitespace-pre-wrap">
                {angle.prompt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex-shrink-0 px-5 py-4 border-t border-gray-100 space-y-2">
        {/* Copy Prompt */}
        <button
          onClick={handleCopy}
          className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 bg-black text-white hover:bg-gray-800"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Prompt
            </>
          )}
        </button>

        {/* Add / Remove from Grid */}
        <button
          onClick={() => onToggleSelect(angle.id)}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 border
            ${isSelected
              ? 'border-gray-200 text-gray-500 hover:border-red-200 hover:text-red-500 hover:bg-red-50'
              : 'border-gray-200 text-black hover:border-black hover:bg-gray-50'
            }`}
        >
          {isSelected ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
              Remove from Grid
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add to Grid
            </>
          )}
        </button>
      </div>
    </div>
  )
}
