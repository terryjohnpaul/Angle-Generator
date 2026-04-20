import { useState } from 'react'

export default function AnglePanel({ angle, isSelected, onClose, onToggleSelect, selectionOrder }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const fullPrompt = `Use the source image as the only reference. Generate a single image depicting the exact same characters, wardrobe, facial structure, lighting logic, and environment as the source. Preserve strict character consistency and cinematic realism. Do not introduce any new people or background characters. Do not alter identity, age, gender, body proportions, costume details, or character poses.

${angle.prompt}`
    navigator.clipboard.writeText(fullPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed top-0 right-0 bottom-16 w-[30vw] bg-white border-l border-gray-100 z-40 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <span className="text-sm font-bold text-black tracking-tight truncate pr-3">
          {angle.name}
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
        <div className="px-5 py-5 space-y-5">
          {/* Name + description */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-extrabold text-black tracking-tight leading-snug">
                {angle.name}
              </h2>
              {isSelected && (
                <span className="flex items-center gap-1 bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  #{selectionOrder}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {angle.description}
            </p>
          </div>

          {/* Director tip */}
          {angle.directorTip && (() => {
            const { director, movie, year, note } = angle.directorTip
            const query = encodeURIComponent(`${director} ${movie} ${year} ${angle.name} film still`)
            const searchUrl = `https://www.google.com/search?q=${query}&tbm=isch`
            return (
              <div className="bg-gray-50 rounded-xl border border-gray-100 px-4 py-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Director's Note</p>
                  <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-400 hover:text-black transition-colors flex items-center gap-1"
                  >
                    View reference
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="text-xs font-semibold text-black mb-0.5">
                  {director} · <span className="font-normal italic">{movie}</span> ({year})
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
              </div>
            )
          })()}

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
