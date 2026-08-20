import { useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Find a doctor", href: "#services" },
  { name: "Apps", href: "#apps" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About us", href: "#articles" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-6 lg:px-0">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#458FF6] text-xl font-bold text-white">
            T
          </span>

          <span className="text-[24px] font-bold tracking-tight text-[#233348]">
            Trafalgar
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[15px] transition ${
                index === 0
                  ? "font-bold text-[#1F1534]"
                  : "font-normal text-[#7D7987] hover:text-[#458FF6]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#7D7987] transition hover:text-[#458FF6]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}