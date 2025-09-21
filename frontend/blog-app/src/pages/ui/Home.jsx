import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // <--- Import Link
import Fetch from './Fetch';
import ProductList from "../../components/ProductList";

export default function Categories() {
  const featuredItems = [
    {
      title: "The Him and Her Show",
      description: `Lauryn Bosstick, the creator of The Skinny Confidential, a blog,
      book, podcast and Youtube channel. Lauryn helps women live their best lives
      by sharing everything from wellness & beauty to business & real-life tips.
      Michael Bosstick a serial entrepreneur and brand builder. He is currently the CEO
      of the female-focused network, Dear Media.`,
      stats: ["500M+ Episodes Downloaded", "13K+ 5-star reviews"],
      buttonText: "Listen Now",
      buttonLink: "#",
      image: "./one.png",
    },
    {
      title: `Book: “GTFO of the Sun”`,
      description: `The Skinny Confidential’s Get the F*ck Out of the Sun features routines,
      products, tips, and insider secrets from 100+ of the world’s best skincare gurus.`,
      stats: [],
      buttonText: "Buy Now",
      buttonLink: "#",
      image: "https://shopskinnyconfidential.com/cdn/shop/files/BROWPEPTIDE_about.png?crop=center&height=1024&v=1732735535&width=1024",
    },
  ];

  const categories = [
    {
      name: "BEAUTY",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2024/11/empties-1024x1365.jpeg",
    },
    {
      name: "REALNESS",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2023/07/brow-tint-e1695242909647.jpeg",
    },
    {
      name: "RECIPES",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2023/02/The-Skinny-Confidential-X-Spritz-10.jpg",
    },
    {
      name: "SHOW",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2025/01/mel-robbins-x-the-skinny-confidential-podcast-2-1024x1536.jpg",
    },
    {
      name: "BLOG POSTS",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2024/11/Lauryn-Nov-2024-61-scaled-e1736290112489-800x964.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image */}
      <div className="flex justify-center my-8">
        <img
          src="./home.png"
          className="w-full max-w-8xl h-180 rounded-xl object-cover shadow-xl transition-transform"
          alt="Profile"
        />
      </div>

      <div className="bg-[#F9F6F2] px-8 py-16">
        <Fetch />

        <h1
          className="mb-20 text-left mx-16 mt-6 font-bold text-5xl tracking-wide"
          style={{ color: "var(--color-dark-blue)" }}
        >
          BLOG CATEGORIES
        </h1>

        {/* Swiper for categories */}
        <div className="max-w-8xl px-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={i}>
                {/* Wrap in Link to category page */}
                <Link to={`/category/${cat.name.toLowerCase()}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-md h-[420px] flex items-center justify-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-full w-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Featured Items */}
        <div className="max-w-8xl mx-22 grid md:grid-cols-2 gap-20 px-6 mt-16">
          {featuredItems.map((item, i) => (
            <div key={i} className="flex flex-col w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-lg w-full h-[240px] md:h-[600px] lg:h-[700px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <a
                  href={item.buttonLink}
                  className="absolute bottom-22 left-30 bg-white px-6 py-2 rounded-full font-medium shadow hover:bg-gray-100 text-xl transition"
                >
                  {item.buttonText}
                </a>
              </div>

              <div className="mx-16 w-full mt-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C3C] mb-4 leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-xl md:text-xl leading-relaxed">
                  {item.description}
                </p>

                {item.stats && item.stats.length > 0 && (
                  <div className="mt-7 space-y-2 text-lg md:text-2xl font-semibold text-[#1C1C3C]">
                    {item.stats.map((stat, idx) => (
                      <p key={idx}>{stat}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <ProductList />
      </div>
    </div>
  );
}
