import { angles } from '../data/angles'
import AngleCard from './AngleCard'

export default function AngleGrid({ onOpenPanel, selectionOrderOf, activeAngleId }) {
  return (
    <div className="px-6 pb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {angles.map((angle) => (
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
}
