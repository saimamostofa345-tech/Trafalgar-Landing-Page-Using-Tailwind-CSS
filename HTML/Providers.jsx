export default function Providers() {
  return (
    <section className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1120px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/providers.png"
            alt="Leading healthcare providers"
            className="w-full max-w-[520px] object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="max-w-[440px] text-[30px] font-bold leading-[1.3] sm:text-[34px]">
            Leading healthcare providers
          </h2>

          <div className="mt-6 h-[2px] w-14 rounded-full bg-[#1F1534]" />

          <p className="mt-6 max-w-[500px] text-[16px] leading-8 text-[#7D7987]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it's not just
            work. We take pride in the solutions we deliver.
          </p>

          <button className="mt-8 rounded-full border border-[#458FF6] px-9 py-3 text-[15px] font-bold text-[#458FF6] transition hover:bg-[#458FF6] hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}