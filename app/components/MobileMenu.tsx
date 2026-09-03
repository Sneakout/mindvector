"use client";

import { useEffect, useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <div className="mobile-menu">
      <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        {open ? "Close" : "Menu"}<i aria-hidden="true" />
      </button>
      {open && (
        <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="Mobile navigation">
          <a href="#services" onClick={closeMenu}>Capabilities <span>→</span></a>
          <a href="#approach" onClick={closeMenu}>Approach <span>→</span></a>
          <div className="mobile-menu-apps">
            <p>Apps</p>
            <a href="/apps/fuel-ledger/" onClick={closeMenu}>FuelLedger <span>↗</span></a>
            <a href="/apps/fresh-fold/" onClick={closeMenu}>Fresh Fold <span>↗</span></a>
          </div>
          <a href="#contact" onClick={closeMenu}>Contact <span>→</span></a>
          <a className="mobile-menu-cta" href="#contact" onClick={closeMenu}>Start a project <span>↗</span></a>
        </nav>
      )}
    </div>
  );
}
