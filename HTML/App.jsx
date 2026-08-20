export default function Apps() {
  return (
    <section id="apps" className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1120px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <h2 className="max-w-[430px] text-[30px] font-bold leading-[1.3] sm:text-[34px]">
            Download our mobile apps
          </h2>

          <div className="mt-6 h-[2px] w-14 rounded-full bg-[#1F1534]" />

          <p className="mt-6 max-w-[500px] text-[16px] leading-8 text-[#7D7987]">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously, no matter where you are.
          </p>

          <button className="mt-8 rounded-full border border-[#458FF6] px-9 py-3 text-[15px] font-bold text-[#458FF6] transition hover:bg-[#458FF6] hover:text-white">
            Download
          </button>
        </div>

        {/* Image */}
        <div className="order-1 flex justify-center lg:order-2">
          <img
            src="/images/apps.png"
            alt="Download mobile application"
            className="w-full max-w-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}