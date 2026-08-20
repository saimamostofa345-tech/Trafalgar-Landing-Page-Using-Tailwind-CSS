const services = [
  {
    icon: "⌕",
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
  },
  {
    icon: "✚",
    title: "Online pharmacy",
    description:
      "Buy your medicines with our online pharmacy and get them delivered to your door.",
  },
  {
    icon: "▣",
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recommendations.",
  },
  {
    icon: "▤",
    title: "Details info",
    description:
      "Get detailed information about doctors, hospitals, and healthcare services.",
  },
  {
    icon: "✚",
    title: "Emergency care",
    description:
      "Get access to emergency care and trusted healthcare support when you need it.",
  },
  {
    icon: "▥",
    title: "Tracking",
    description:
      "Track your appointments, medical records, and healthcare journey easily.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white px-6 py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-180px] top-20 hidden h-[500px] w-[500px] rounded-full bg-[#F5FAFF] lg:block" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-[30px] font-bold sm:text-[34px]">
            Our services
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-[#1F1534]" />

          <p className="mt-6 text-[16px] leading-7 text-[#7D7987]">
            We provide to you the best choices for you. Adjust it to your
            health needs and make sure you undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-[270px] rounded-[20px] bg-white p-8 shadow-[0_20px_55px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center text-[38px] text-[#458FF6]">
                {service.icon}
              </div>

              <h3 className="mt-6 text-[20px] font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#7D7987]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full border border-[#458FF6] px-9 py-3 text-[15px] font-bold text-[#458FF6] transition hover:bg-[#458FF6] hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}