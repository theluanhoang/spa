import React, {useState } from "react";
import styles from "./PhotoLibrary.module.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {} from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import ItemImg from "../../components/ItemImg";
import { images } from "./images";
import useKey from "../../hooks/useKey";

const cx = classNames.bind(styles);


function PhotoLibrary() {
  const [id, setId] = useState(0)
  const [toggle, setToggle] = useState(false)
  console.log(id)

  useKey(39, handleNext) 
  useKey(37, handlePrev)
  useKey(27, () => setToggle(false)) 

  function handlePrev() {
    setId(prev => prev - 1)
    if(id === 0) {
      setId(images.length - 1)
    }
  }

  function handleNext() {
    setId(prev => prev + 1)
    if(id === images.length - 1) {
      setId(0)
    }
  }

  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("content")}>
        <div className={cx("inner")}>
          <h2 className={cx("title")}>Thư viện ảnh</h2>
          <div className={cx("box-list")}>
            {images.map((image, index) => (
                <ItemImg src={image.src} index={index} setId={setId} setToggle={setToggle}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <div className={cx("gallery", toggle && "show")}>
        <IoMdClose className={cx("close")} onClick={() =>setToggle(false)} />
        <div className={cx("gallery__inner")}>
          <img src={images[id].src} alt="" />
        </div>
        <div className={cx("control", "prev")} onClick={handlePrev} >
          <BsChevronLeft />
        </div>
        <div className={cx("control", "next")} onClick={handleNext} >
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
