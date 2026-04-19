import { useState } from 'react'
import Navbar from './components/Navbar'
import PageHeader from './components/PageHeader'
import AngleGrid from './components/AngleGrid'
import ActionBar from './components/ActionBar'
import { useAngleSelection } from './hooks/useAngleSelection'
import { generatePrompt } from './utils/promptGenerator'
import { angles } from './data/angles'

export default function App() {
  const { count, maxReached, toggle, reset, randomize, selectionOrderOf, selectedIds } =
    useAngleSelection()
  const [variant, setVariant] = useState(1)

  const selectedAngles = selectedIds.map((id) => angles.find((a) => a.id === id))
  const prompt = generatePrompt(selectedAngles, variant)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
  }

  const handleExtract = () => {
    alert(prompt)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <PageHeader count={count} />
      <AngleGrid
        maxReached={maxReached}
        onToggle={toggle}
        selectionOrderOf={selectionOrderOf}
      />
      <ActionBar
        count={count}
        onReset={reset}
        onRandom={randomize}
        onCopy={handleCopy}
        onExtract={handleExtract}
        variant={variant}
        onVariantChange={setVariant}
      />
    </div>
  )
}
