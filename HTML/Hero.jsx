export default function Hero() {
  return (
    <section id="home" className="relative bg-white">
      {/* Decorative dots */}
      <div className="absolute left-0 top-24 hidden flex-col gap-1 lg:flex">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-[#E5E5E5]"
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 pb-20 pt-12 sm:pt-16 lg:grid-cols-2 lg:px-0 lg:pb-28 lg:pt-20">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <h1 className="max-w-[500px] text-[40px] font-bold leading-[1.2] tracking-tight sm:text-[48px]">
            Virtual healthcare for you
          </h1>

          <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-[#7D7987]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex rounded-full bg-[#458FF6] px-8 py-4 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(69,143,246,0.2)] transition hover:bg-[#367FDF]"
          >
            Consult today
          </a>
        </div>

        {/* Illustration */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-[#E8F3FF]" />

            <img
              src="/images/hero.png"
              alt="Virtual healthcare"
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}