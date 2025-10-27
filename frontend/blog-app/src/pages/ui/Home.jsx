import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // <--- Import Link
import Fetch from './Fetch';


import ProductList from "../../components/ProductList";
 
export default function Categories() {
  

  const categories = [
    {
      name: "Lifestyle",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2024/11/empties-1024x1365.jpeg",
    },
    {
      name: "Other",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2023/07/brow-tint-e1695242909647.jpeg",
    },
    {
      name: "Tech",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2023/02/The-Skinny-Confidential-X-Spritz-10.jpg",
    },
    {
      name: "Education",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2025/01/mel-robbins-x-the-skinny-confidential-podcast-2-1024x1536.jpg",
    },
    {
      name: "Travel",
      image: "https://www.theskinnyconfidential.com/wp-content/uploads/2024/11/Lauryn-Nov-2024-61-scaled-e1736290112489-800x964.jpg",
    },
  ];

  return (
    <div className="my-8">
  <h1
  className="text-2xl italic md:text-4xl fomt-serif text-center mb-12"
  style={{
    color: "var(--gig-pop)",
    filter: "brightness(0.85)", // makes it 15% darker
  }}
>
  The Skinny Confidential
</h1>

<Link to="/show">
  <img className="mx-auto" src="https://image2url.com/images/1761480229763-7431eb96-f3a5-43c6-930f-952ae8355a7f.png" alt="Show" />
</Link>



      <div className="bg-[#F9F6F2] mx-20 px-8 py-16">
        <Fetch /> 

        <h1
          className="mb-20 text-left mx-16 mt-6 font-bold text-4xl tracking-wide"
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
<ProductList/>

      
      </div>
    </div>
  );
}
