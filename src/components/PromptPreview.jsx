import { useState } from 'react'

export default function PromptPreview({ prompt, open, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!open) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-sm font-extrabold text-black tracking-tight">
              Generated Prompt
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              9 angles · ready to copy
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Prompt text */}
        <div className="px-6 py-4">
          <pre className="whitespace-pre-wrap text-xs text-gray-700 font-mono bg-gray-50 rounded-xl p-4 border border-gray-100 max-h-64 overflow-y-auto leading-relaxed">
            {prompt}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5">
          <button
            onClick={handleCopy}
            className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2
              bg-black text-white hover:bg-gray-800 active:scale-95"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied to clipboard
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy to Clipboard
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
