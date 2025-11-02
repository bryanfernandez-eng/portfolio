import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const navigateTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-green-700 bg-[var(--panel)]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="h2-retro text-sm md:text-base text-[var(--text)]">
            BRYAN A. FERNANDEZ
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.href)}
                className="text-[var(--text)] px-3 py-2 hover:text-[var(--accent)]"
              >
                [{item.name}]
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text)] hover:text-[var(--accent)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--panel)] border-t border-green-700">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigateTo(item.href)}
              className="block w-full text-left px-4 py-3 text-[var(--text)] hover:text-[var(--accent)]"
            >
              [{item.name}]
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}


