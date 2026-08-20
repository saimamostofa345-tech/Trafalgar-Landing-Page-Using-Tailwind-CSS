export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1050px] rounded-[24px] bg-gradient-to-br from-[#5A98F2] to-[#67C3F3] px-7 py-10 text-white shadow-[0_15px_40px_rgba(69,143,246,0.15)] sm:px-12 sm:py-12">
        <h2 className="text-center text-[27px] font-bold sm:text-[30px]">
          What our customer are saying
        </h2>

        <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-white" />

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
          {/* Customer */}
          <div className="flex items-center justify-center gap-5 md:justify-start">
            <img
              src="/images/avatar.jpg"
              alt="Edward Newgate"
              className="h-[75px] w-[75px] rounded-full border-4 border-white object-cover"
            />

            <div>
              <h3 className="text-[18px] font-bold">Edward Newgate</h3>
              <p className="mt-1 text-[14px] opacity-80">Founder Circle</p>
            </div>
          </div>

          {/* Testimonial */}
          <p className="text-center text-[15px] leading-7 opacity-95 md:text-left">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously. No more waiting for a call or
            waiting around.”
          </p>
        </div>

        {/* Slider dots */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}