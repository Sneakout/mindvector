export function ViralMark({ small = false }: { small?: boolean }) {
  return <img className={`viral-mark${small ? " viral-mark-small" : ""}`} src="/viral-logo-exact.png" alt="" aria-hidden="true" />;
}
