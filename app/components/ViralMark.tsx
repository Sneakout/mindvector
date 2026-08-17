export function ViralMark({ small = false }: { small?: boolean }) {
  return <img className={`viral-mark${small ? " viral-mark-small" : ""}`} src="/viral-mark.png" alt="" aria-hidden="true" />;
}
