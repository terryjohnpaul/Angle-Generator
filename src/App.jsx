import { useState } from 'react'
import Navbar from './components/Navbar'
import PageHeader from './components/PageHeader'
import AngleGrid from './components/AngleGrid'
import AnglePanel from './components/AnglePanel'
import ActionBar from './components/ActionBar'
import { useAngleSelection } from './hooks/useAngleSelection'
import { generatePrompt } from './utils/promptGenerator'
import { angles } from './data/angles'

export default function App() {
  const { count, toggle, reset, randomize, selectionOrderOf, selectedIds } =
    useAngleSelection()
  const [activeAngle, setActiveAngle] = useState(null)

  const selectedAngles = selectedIds.map((id) => angles.find((a) => a.id === id))
  const prompt = generatePrompt(selectedAngles)

  const handleCopy = () => navigator.clipboard.writeText(prompt)
  const handleOpenPanel = (angle) => setActiveAngle(angle)
  const handleClosePanel = () => setActiveAngle(null)

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* 70/30 layout: main content shifts left when panel is open */}
      <div
        className="transition-all duration-300"
        style={{ paddingRight: activeAngle ? '30vw' : '0' }}
      >
        <div className="max-w-6xl mx-auto">
          <PageHeader count={count} />
        </div>
        <div className="max-w-6xl mx-auto">
          <AngleGrid
            onOpenPanel={handleOpenPanel}
            selectionOrderOf={selectionOrderOf}
            activeAngleId={activeAngle?.id ?? null}
          />
        </div>
      </div>

      {/* Side panel — slides in from right */}
      {activeAngle && (
        <AnglePanel
          angle={activeAngle}
          isSelected={selectedIds.includes(activeAngle.id)}
          selectionOrder={selectionOrderOf(activeAngle.id)}
          onClose={handleClosePanel}
          onToggleSelect={toggle}
        />
      )}

      <ActionBar
        count={count}
        onReset={reset}
        onRandom={randomize}
        onCopy={handleCopy}
      />
    </div>
  )
}
