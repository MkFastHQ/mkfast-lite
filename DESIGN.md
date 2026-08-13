# Design System

## Direction

TanStarter Lite uses an original workshop-poster form of neo-brutalism: a warm
paper-like canvas, dense black construction lines, offset printed color fields,
and components that look assembled rather than polished into anonymity. Dark
mode inverts the workshop into a late-night build desk without turning neon.

The system is playful enough to be memorable but disciplined enough for a
developer template. It avoids SaaS-dashboard chrome, glass effects, gradients,
generic bento grids, and decorative code motifs.

## Palette

- Paper: warm ivory in light mode, near-black brown in dark mode.
- Ink: near-black in light mode, warm ivory in dark mode.
- Signal orange: primary actions and decisive emphasis.
- Sun yellow: highlighted structure and selected states.
- Cyan: technical details and secondary fields.
- Leaf green: positive inclusion.
- Lavender: quieter supporting fields.

Color belongs to page-scale fields and purposeful components, not scattered
accents. Text on color fields uses ink for stable contrast.

## Typography

Baloo 2 is the display and UI voice for Latin text. It is heavy, rounded, and
physical without imitating a terminal. Simplified Chinese uses the platform's
rounded sans-serif fallback. Headings are compact and heavy; body copy stays
between 60 and 72 characters per line.

## Components

- Borders are 2px ink lines.
- Interactive and highlighted surfaces use 4px offset hard shadows.
- Corners use a restrained 10px radius; controls may use 8px.
- Buttons visibly depress on activation by moving into their shadow.
- Cards vary in scale and arrangement; equal icon-card grids do not structure
  the page.
- Icons are authored geometric SVGs with a consistent 2px stroke.

## Motion

Content is visible before JavaScript. The primary authored moment is the hero
assembly: colored structural pieces settle into alignment while the build path
draws itself. Below-fold transitions are restrained and never required for
comprehension. Reduced-motion users receive an immediate stable composition.

## Responsive Behavior

Desktop uses an asymmetric editorial/workbench composition. Mobile collapses
that composition into one deliberate reading path, keeps controls at least
44px tall, and turns navigation into an accessible disclosure panel.

## Accessibility

Use semantic headings and landmarks, skip navigation, clear focus rings,
adequate contrast in both themes, descriptive control labels, and no
color-only communication.
