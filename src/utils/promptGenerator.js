const SINGLE_OPENING = `Use the source image as the only reference. Generate a single image depicting the exact same characters, wardrobe, facial structure, lighting logic, and environment. Preserve strict character consistency and cinematic realism. Do not introduce any new people or background characters. Do not alter identity, age, gender, body proportions, costume details, or character poses.`

const ASPECT_RATIO_RULES = `Aspect ratio rules: every panel must use the exact same aspect ratio, identical framing proportions, and consistent crop logic. No panel may be taller, wider, zoomed differently, or padded differently than the others. Maintain uniform composition boundaries across the entire grid. The final composite grid image must also retain the same aspect ratio as the original reference image.`

const CLOSING_BLOCK = `All angles must feel like coverage from the same film production: coherent lens language, realistic camera physics, consistent shadows, reflections, and exposure. Avoid stylization drift. Avoid duplicating compositions. Avoid mirrored or slightly rotated versions of the same shot. Each angle must be compositionally and perspectively unique.

Output as a single grid image with identical aspect ratios, cinematic color grading, sharp detail, physically plausible lighting, and no added characters.`

function getGridOpening(count) {
  const layout = count === 9 ? 'a clean 3x3 grid' : `a clean grid of ${count} panels`
  return `Use the source image as the only reference and generate a single composite output arranged as ${layout}. Each cell must depict the exact same moment with identical characters, wardrobe, facial structure, lighting logic, and environment. Preserve strict character consistency and cinematic realism. Do not introduce any new people, creatures, or background characters in any frame. Do not alter identity, age, gender, body proportions, costume details, or character poses. Poses, gestures, head orientation, limb positions, and physical interactions must remain unchanged across all panels. Maintain continuity of props, time of day, color palette, and scene mood.`
}

function getLabelingRules(count) {
  const labels = Array.from({ length: count }, (_, i) => `"${i + 1}"`).join(', ')
  return `Labeling rules: each panel must include a clear, unobtrusive numeric label in the top-left corner: ${labels}. Use a clean, minimal sans-serif font, small size, white or neutral color with subtle contrast for legibility. Labels must not overlap faces, key actions, or important visual elements.`
}

export function generatePrompt(selectedAngles) {
  if (selectedAngles.length === 0) return ''

  if (selectedAngles.length === 1) {
    const angle = selectedAngles[0]
    return [
      SINGLE_OPENING,
      `Camera angle: ${angle.name} — ${angle.gridDesc}`,
      `Output as a single cinematic image with sharp detail, physically plausible lighting, and no added characters.`,
    ].join('\n\n')
  }

  const count = selectedAngles.length
  const angleList = selectedAngles
    .map((angle) => `${angle.name} — ${angle.gridDesc}`)
    .join('\n')

  return [
    getGridOpening(count),
    `Create ${count} clearly distinct camera angles from the same scene:`,
    angleList,
    ASPECT_RATIO_RULES,
    getLabelingRules(count),
    CLOSING_BLOCK,
  ].join('\n\n')
}
