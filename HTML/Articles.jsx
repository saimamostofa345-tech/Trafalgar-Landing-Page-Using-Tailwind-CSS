const articles = [
  {
    image: "/images/article-1.jpg",
    title: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection.",
  },
  {
    image: "/images/article-2.jpg",
    title: "Herbal medicines that are safe for consumption",
    description:
      "Herbal medicine is very widely used at this time because of its very good benefits.",
  },
  {
    image: "/images/article-3.jpg",
    title: "Natural care for healthy living",
    description:
      "A healthy lifestyle can help you maintain your health and improve your quality of life.",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative bg-white px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center text-[30px] font-bold sm:text-[34px]">
          Check out our latest article
        </h2>

        <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-[#1F1534]" />

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-[20px] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-[190px] w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-[18px] font-bold leading-7">
                  {article.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#7D7987]">
                  {article.description}
                </p>

                <button className="mt-5 text-[14px] font-bold text-[#458FF6]">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full border border-[#458FF6] px-9 py-3 text-[15px] font-bold text-[#458FF6] transition hover:bg-[#458FF6] hover:text-white">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}