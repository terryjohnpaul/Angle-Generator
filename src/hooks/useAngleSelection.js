import { useState, useCallback } from 'react'
import { angles } from '../data/angles'

const MAX_SELECTION = 9

export function useAngleSelection() {
  const [selectedIds, setSelectedIds] = useState([])

  const toggle = useCallback((id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_SELECTION) return prev
      return [...prev, id]
    })
  }, [])

  const reset = useCallback(() => setSelectedIds([]), [])

  const randomize = useCallback(() => {
    const shuffled = [...angles].sort(() => Math.random() - 0.5)
    setSelectedIds(shuffled.slice(0, MAX_SELECTION).map((a) => a.id))
  }, [])

  const selectionOrderOf = useCallback(
    (id) => {
      const idx = selectedIds.indexOf(id)
      return idx === -1 ? null : idx + 1
    },
    [selectedIds]
  )

  return {
    selectedIds,
    count: selectedIds.length,
    maxReached: selectedIds.length >= MAX_SELECTION,
    toggle,
    reset,
    randomize,
    selectionOrderOf,
  }
}
