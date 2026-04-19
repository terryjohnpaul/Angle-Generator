export default function AngleCard({ angle, selectionOrder, onToggle, disabled }) {
  const isSelected = selectionOrder !== null

  return (
    <button
      onClick={() => onToggle(angle.id)}
      disabled={disabled && !isSelected}
      title={angle.description}
      className={`
        relative w-full flex items-center gap-3 p-3 rounded-xl border text-left
        transition-all duration-150 active:scale-95
        ${isSelected
          ? 'bg-black border-black text-white shadow-md'
          : 'bg-white border-gray-150 text-black hover:border-gray-300 hover:shadow-sm'
        }
        ${disabled && !isSelected ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={!isSelected ? { borderColor: '#EEEEEE' } : {}}
    >
      {/* Thumbnail */}
      <img
        src={angle.image}
        alt={angle.name}
        className={`w-14 h-14 rounded-lg object-cover flex-shrink-0 ${
          isSelected ? 'opacity-75' : 'border border-gray-100'
        }`}
      />

      {/* Name */}
      <span className="text-sm font-semibold leading-tight flex-1">
        {angle.name}
      </span>

      {/* Checkmark on selected */}
      {isSelected && (
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

      {/* Selection order badge */}
      {isSelected && (
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-200 text-black text-xs font-extrabold rounded-full flex items-center justify-center shadow-sm">
          {selectionOrder}
        </span>
      )}
    </button>
  )
}
