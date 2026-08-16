export function ViralMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`viral-mark${small ? " viral-mark-small" : ""}`} aria-hidden="true">
      <i className="viral-mark-orbit viral-mark-orbit-a" />
      <i className="viral-mark-orbit viral-mark-orbit-b" />
      <i className="viral-mark-orbit viral-mark-orbit-c" />
      <i className="viral-mark-core" />
    </span>
  );
}
