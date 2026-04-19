/**
 * Hardcoded prompt v2 — 9 curated angles, 6 failing descriptions rewritten
 * with stronger, more extreme language to force Gemini out of default medium shots.
 * This version produced the best Breaking Bad output.
 */

export const HARDCODED_PROMPT = `Use the source image as the only reference and generate a single composite output arranged as a clean 3x3 grid. Each cell must depict the exact same moment with identical characters, wardrobe, facial structure, lighting logic, and environment. Preserve strict character consistency and cinematic realism. Do not introduce any new people, creatures, or background characters in any frame. Do not alter identity, age, gender, body proportions, costume details, or character poses. Poses, gestures, head orientation, limb positions, and physical interactions must remain unchanged across all panels. Maintain continuity of props, time of day, color palette, and scene mood.

Create nine clearly distinct camera angles from the same scene:

Wide establishing shot — camera far from subject, full environment in frame, subject small within vast scene.
Close-up — lens inches from subject's face, face fills entire frame edge to edge, no background visible at all, only skin and eyes in frame.
Low-angle hero shot — camera lens placed at knee height pointing steeply upward, subjects tower above with sky filling the background behind them, extreme upward perspective distortion.
Bird's-eye vertical shot — camera mounted directly overhead pointing straight down at 90 degrees, subjects seen entirely from above as a flat top-down map, no horizon visible, only ground and top of heads.
Ground-level worm's-eye shot — camera lens flat on the ground pointing 90 degrees straight upward, subjects viewed from directly below, feet in extreme foreground, sky above, maximum vertical foreshortening.
Over-the-shoulder shot — framed from behind one character toward the other, shallow depth of field, strong narrative focus.
Dutch tilt shot — camera body physically rotated 35 to 45 degrees, entire frame canted at steep diagonal, horizon line slashes across frame at sharp angle, deliberately disorienting composition.
Silhouette backlit shot — subjects are pure solid black silhouettes with zero facial detail visible, blazing bright sky fills the entire background, only body outlines and shapes visible against white or bright light.
Profile side shot — camera positioned exactly 90 degrees to the side of subjects, subjects face purely left or right, only one ear visible, zero frontal face detail, pure strict lateral profile.

Aspect ratio rules: every panel must use the exact same aspect ratio, identical framing proportions, and consistent crop logic. No panel may be taller, wider, zoomed differently, or padded differently than the others. Maintain uniform composition boundaries across the entire grid. The final composite grid image must also retain the same aspect ratio as the original reference image.

Labeling rules: each panel must include a clear, unobtrusive numeric label in the top-left corner: "1", "2", "3", "4", "5", "6", "7", "8", and "9". Use a clean, minimal sans-serif font, small size, white or neutral color with subtle contrast for legibility. Labels must not overlap faces, key actions, or important visual elements.

All nine angles must feel like coverage from the same film production: coherent lens language, realistic camera physics, consistent shadows, reflections, and exposure. Avoid stylization drift. Avoid duplicating compositions. Avoid mirrored or slightly rotated versions of the same shot. Each angle must be compositionally and perspectively unique.

Output as a single grid image with nine panels, identical aspect ratios, cinematic color grading, sharp detail, physically plausible lighting, and no added characters.`

Aspect ratio rules: every panel must use the exact same aspect ratio, identical framing proportions, and consistent crop logic. No panel may be taller, wider, zoomed differently, or padded differently than the others. Maintain uniform composition boundaries across the entire grid. The final composite grid image must also retain the same aspect ratio as the original reference image.

Labeling rules: each panel must include a clear, unobtrusive numeric label in the top-left corner: "1", "2", "3", "4", "5", "6", "7", "8", and "9". Use a clean, minimal sans-serif font, small size, white or neutral color with subtle contrast for legibility. Labels must not overlap faces, key actions, or important visual elements.

All nine angles must feel like coverage from the same film production: coherent lens language, realistic camera physics, consistent shadows, reflections, and exposure. Avoid stylization drift. Avoid duplicating compositions. Avoid mirrored or slightly rotated versions of the same shot. Each angle must be compositionally and perspectively unique.

Output as a single grid image with nine panels, identical aspect ratios, cinematic color grading, sharp detail, physically plausible lighting, and no added characters.`
