import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/slice/dataSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import "./index.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestSellersCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="bestSellers">
      <div className="container">
        <div className="bestSellers">
          <p className="head">Popular Item in the market</p>
          <h1>Best Sellers</h1>
          <div className="line"></div>
          <div className="cards">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
            >
              {products.data?.map((element) => {
                return (
                  <SwiperSlide key={element._id}>
                    <div className="card">
                      <div className="img">
                        <img src={element.image} alt="" />
                      </div>
                      <div className="info">
                        <p>{element.model}</p>
                        <h3>{element.name}</h3>
                        <div className="price">${element.price}.00</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersCard;
