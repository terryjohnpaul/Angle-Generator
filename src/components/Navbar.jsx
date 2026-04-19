import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="font-extrabold text-lg tracking-tight text-black">
          FrameCode
        </span>

        {/* Tools dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            className="flex items-center gap-1 text-sm font-semibold text-black hover:text-gray-500 transition-colors"
          >
            Tools
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-black bg-gray-50 border-b border-gray-100"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                Angle Selector
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-400 cursor-not-allowed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                Avatar Builder
                <span className="ml-auto text-xs font-medium text-gray-300">Soon</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
