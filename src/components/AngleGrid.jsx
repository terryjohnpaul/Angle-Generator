import { angles } from '../data/angles'
import AngleCard from './AngleCard'

const CATEGORIES = [
  {
    label: 'Coverage',
    description: 'Distance and scale',
    ids: [1, 9, 2, 5, 24],
  },
  {
    label: 'Angle & Height',
    description: 'Camera position',
    ids: [3, 6, 10, 11, 21, 8],
  },
  {
    label: 'Character',
    description: 'Subject and narrative',
    ids: [4, 7, 12, 13, 25, 29, 19, 20, 22, 18],
  },
  {
    label: 'Lens & Composition',
    description: 'Technical and creative',
    ids: [14, 15, 16, 17, 26, 27, 28, 23, 30],
  },
]

export default function AngleGrid({ onOpenPanel, selectionOrderOf, activeAngleId }) {
  return (
    <div className="px-6 pb-32 space-y-8">
      {CATEGORIES.map((category) => {
        const categoryAngles = category.ids.map((id) => angles.find((a) => a.id === id)).filter(Boolean)
        return (
          <div key={category.label}>
            {/* Category header */}
            <div className="flex items-baseline gap-2 mb-3">
              <h2 className="text-xs font-bold text-black uppercase tracking-widest">
                {category.label}
              </h2>
              <span className="text-xs text-gray-400">{category.description}</span>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {categoryAngles.map((angle) => (
                <AngleCard
                  key={angle.id}
                  angle={angle}
                  selectionOrder={selectionOrderOf(angle.id)}
                  onOpenPanel={onOpenPanel}
                  isActive={activeAngleId === angle.id}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
