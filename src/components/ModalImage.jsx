import React from "react";
import Close from "@material-ui/icons/Close";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ModalImage({ images, setIsModal }) {
  console.log(images);
  const closeModal = (e) => {
    if (e.target.className === "modal__image-block") setIsModal(false);
  };
  return (
    <div className="modal__container" onClick={(e) => closeModal(e)}>
      <div className="modal__image-block">
        <Swiper navigation={true} loop={true} className="mySwiper">
          {images.map(({ img }, i) => (
            <SwiperSlide key={i}>
              <img
                src={require(`../assets/projects/${img}`).default}
                alt={img}
                className="modal__container-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Close
          className="modal__container-close"
          title="close"
          onClick={() => setIsModal(false)}
        />
      </div>
    </div>
  );
}
