import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductSwiperCard from "../../components/ProductSwiperCard/ProductSwiperCard";
import data from "../../data.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <div>
      <h2>Most Popular Products</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        spaceBetween={24}
        slidesPerView={3}
      >
        {data.products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductSwiperCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomePage;
