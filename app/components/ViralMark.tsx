export function ViralMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`viral-mark${small ? " viral-mark-small" : ""}`} aria-hidden="true">
      <i className="viral-block viral-block-a" />
      <i className="viral-block viral-block-b" />
      <i className="viral-block viral-block-c" />
      <i className="viral-block viral-block-d" />
    </span>
  );
}
