import { useState } from 'react'

export default function ActionBar({ count, onReset, onRandom, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-3">

        {/* Left: Reset */}
        <button
          onClick={onReset}
          disabled={count === 0}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-black hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>

        {/* Center: main actions */}
        <div className="flex items-center gap-2">
          {/* Random */}
          <button
            onClick={onRandom}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-gray-100 hover:bg-gray-200 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h5l3 4-3 4H4m16-8h-5l-3 4 3 4h5M4 20h5l3-4m4 0l3 4h5" />
            </svg>
            Random
          </button>

          {/* Copy Prompt */}
          <button
            onClick={handleCopy}
            disabled={count < 1}
            className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
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
        </div>

        {/* Right: spacer to balance Reset on left */}
        <div className="w-16" />

      </div>
    </div>
  )
}
