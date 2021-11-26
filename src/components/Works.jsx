import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./Project";
import projectsData from "../data/projectsData.json";

import ModalImage from './ModalImage'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Works({setScollElement}) {
  const [currentImages, setCurrentImages] = useState([])
  const [isModal, setIsModal] = useState(false)

  const openImage = (images) => {
    setCurrentImages(images)
    setIsModal(true)
  }

  const domElem = useRef(null)

  useEffect(() => {
    setScollElement(domElem.current)
  }, [domElem])

  const pagination = {
    "clickable": true,
  }
  
  return (
    <div className="work__container" ref={domElem}>
      <div className="projects__section">
        <Swiper pagination={pagination} loop={true}>
          {projectsData.map((project, i) => (
            <SwiperSlide key={i}>
              <Project project={project} openImage={openImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {currentImages.length > 1 && isModal && (
            <ModalImage images={currentImages} setIsModal={setIsModal} />
        )}
    </div>
  );
}
