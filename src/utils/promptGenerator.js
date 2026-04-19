const OPENING_BLOCK = `Use the source image as the only reference and generate a single composite output arranged as a clean 3x3 grid. Each cell must depict the exact same moment with identical characters, wardrobe, facial structure, lighting logic, and environment. Preserve strict character consistency and cinematic realism. Do not introduce any new people, creatures, or background characters in any frame. Do not alter identity, age, gender, body proportions, costume details, or character poses. Poses, gestures, head orientation, limb positions, and physical interactions must remain unchanged across all panels. Maintain continuity of props, time of day, color palette, and scene mood.`

const ASPECT_RATIO_RULES = `Aspect ratio rules: every panel must use the exact same aspect ratio, identical framing proportions, and consistent crop logic. No panel may be taller, wider, zoomed differently, or padded differently than the others. Maintain uniform composition boundaries across the entire grid. The final composite grid image must also retain the same aspect ratio as the original reference image.`

const LABELING_RULES = `Labeling rules: each panel must include a clear, unobtrusive numeric label in the top-left corner: "1", "2", "3", "4", "5", "6", "7", "8", and "9". Use a clean, minimal sans-serif font, small size, white or neutral color with subtle contrast for legibility. Labels must not overlap faces, key actions, or important visual elements.`

const CLOSING_BLOCK = `All nine angles must feel like coverage from the same film production: coherent lens language, realistic camera physics, consistent shadows, reflections, and exposure. Avoid stylization drift. Avoid duplicating compositions. Avoid mirrored or slightly rotated versions of the same shot. Each angle must be compositionally and perspectively unique.

Output as a single grid image with nine panels, identical aspect ratios, cinematic color grading, sharp detail, physically plausible lighting, and no added characters.`

export function generatePrompt(selectedAngles) {
  if (selectedAngles.length === 0) return ''

  const angleList = selectedAngles
    .map((angle) => `${angle.name} — ${angle.gridDesc}`)
    .join('\n')

  const sceneIntro = `Create nine clearly distinct camera angles from the same scene:`

  return [
    OPENING_BLOCK,
    sceneIntro,
    angleList,
    ASPECT_RATIO_RULES,
    LABELING_RULES,
    CLOSING_BLOCK,
  ].join('\n\n')
}
