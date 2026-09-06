/**
 * A near-invisible texture + vignette pinned over the whole page. This is
 * the site's one purely-decorative flourish — it's what keeps flat color
 * sections from feeling like plain CSS blocks. Sits above content but below
 * the custom cursor, and never intercepts clicks.
 */
export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <div className="grain-overlay absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0 shadow-[inset_0_0_18vw_rgba(0,0,0,0.55)]" />
    </div>
  );
}
