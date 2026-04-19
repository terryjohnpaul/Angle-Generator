const VARIANT_INTROS = {
  1: 'Shoot this scene as a 3×3 grid using these 9 cinematic camera angles in order:',
  2: 'Create a 3×3 visual story. Capture each frame using these camera angles in sequence:',
  3: 'Direct a 9-panel grid. Frame each shot using the following cinematic angles:',
}

const VARIANT_OUTROS = {
  1: 'Each angle should feel distinct. The 9 shots must work together as a cohesive visual narrative.',
  2: 'Make each frame intentional. Together the 9 shots should tell a single visual story.',
  3: 'Ensure visual variety across the grid. Each shot should contrast and complement the others.',
}

export function generatePrompt(selectedAngles, variant = 1) {
  if (selectedAngles.length === 0) return ''
  const intro = VARIANT_INTROS[variant] ?? VARIANT_INTROS[1]
  const outro = VARIANT_OUTROS[variant] ?? VARIANT_OUTROS[1]
  const list = selectedAngles
    .map((angle, i) => `${i + 1}. ${angle.name}`)
    .join('\n')
  return `${intro}\n\n${list}\n\n${outro}`
}
