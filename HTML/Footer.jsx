const companyLinks = [
  "About",
  "Testimonials",
  "Find a doctor",
  "Apps",
];

const regionLinks = [
  "Indonesia",
  "Singapore",
  "Hongkong",
  "Canada",
];

const helpLinks = [
  "Help center",
  "Contact support",
  "Instructions",
  "How it works",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#5A98F2] to-[#67C3F3] text-white">
      {/* Decorative dots */}
      <div className="absolute bottom-0 left-0 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-white"
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:px-0">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-[#458FF6]">
              T
            </span>

            <span className="text-[22px] font-bold">Trafalgar</span>
          </div>

          <p className="mt-5 max-w-[390px] text-[14px] leading-7 opacity-90">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone.
          </p>

          <p className="mt-5 text-[13px] opacity-80">
            © Trafalgar PTY LTD 2026. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-[17px] font-bold">Company</h3>

          <ul className="space-y-3 text-[14px] opacity-90">
            {companyLinks.map((item) => (
              <li key={item}>
                <a href="#home" className="transition hover:opacity-70">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Region */}
        <div>
          <h3 className="mb-5 text-[17px] font-bold">Region</h3>

          <ul className="space-y-3 text-[14px] opacity-90">
            {regionLinks.map((item) => (
              <li key={item}>
                <a href="#home" className="transition hover:opacity-70">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-5 text-[17px] font-bold">Help</h3>

          <ul className="space-y-3 text-[14px] opacity-90">
            {helpLinks.map((item) => (
              <li key={item}>
                <a href="#home" className="transition hover:opacity-70">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}