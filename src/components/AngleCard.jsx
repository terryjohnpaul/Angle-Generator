export default function AngleCard({ angle, selectionOrder, onOpenPanel, isActive }) {
  const isSelected = selectionOrder !== null

  return (
    <button
      onClick={() => onOpenPanel(angle)}
      className={`
        relative w-full flex items-center gap-3 p-3 rounded-xl border text-left
        transition-all duration-150 active:scale-95 cursor-pointer
        ${isActive
          ? 'border-black shadow-sm bg-white'
          : isSelected
            ? 'bg-black border-black text-white shadow-md'
            : 'bg-white text-black hover:border-gray-300 hover:shadow-sm'
        }
      `}
      style={!isSelected && !isActive ? { borderColor: '#EEEEEE' } : {}}
    >
      {/* Name */}
      <span className={`text-sm font-semibold leading-tight flex-1 ${isSelected && !isActive ? 'text-white' : 'text-black'}`}>
        {angle.name}
      </span>

      {/* Checkmark for selected (when not active) */}
      {isSelected && !isActive && (
        <svg
          className="w-4 h-4 text-white flex-shrink-0 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}

      {/* Active indicator (panel open) */}
      {isActive && (
        <svg
          className="w-4 h-4 text-black flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}

      {/* Selection order badge */}
      {isSelected && (
        <span className={`absolute -top-2 -right-2 w-5 h-5 text-xs font-extrabold rounded-full flex items-center justify-center shadow-sm
          ${isActive ? 'bg-black text-white border border-black' : 'bg-white border border-gray-200 text-black'}`}>
          {selectionOrder}
        </span>
      )}
    </button>
  )
}
