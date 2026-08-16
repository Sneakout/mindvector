"use client";

import { useEffect, useRef } from "react";

export function AppsMenu({ open = false }: { open?: boolean }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeWhenOutside = (event: MouseEvent) => {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) menu.open = false;
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("click", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return <details ref={menuRef} className="apps-menu" open={open || undefined}>
    <summary>Apps</summary>
    <div className="apps-dropdown"><a href="/apps/viral/">Viral <span>↗</span></a></div>
  </details>;
}
