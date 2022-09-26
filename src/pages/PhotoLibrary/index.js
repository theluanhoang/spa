import React, { useState } from "react";
import styles from "./PhotoLibrary.module.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {} from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import ItemImg from "../../components/ItemImg";
import { images } from "./images";
import { Item9 } from "../../assets/img";
import { useSelector } from 'react-redux';
import { slideImageState$ } from '../../redux/selectors';

const cx = classNames.bind(styles);



function PhotoLibrary() {

  
  const { toggle } = useSelector(slideImageState$);


  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("content")}>
        <div className={cx("inner")}>
          <h2 className={cx("title")}>Thư viện ảnh</h2>
          <div className={cx("box-list")}>
            {images.map((image) => (
                <ItemImg src={image.src}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <div className={cx("gallery", toggle && "show")}>
        <IoMdClose className={cx("close")} />
        <div className={cx("gallery__inner")}>
          <img src={Item9} alt="" />
        </div>
        <div className={cx("control", "prev")}>
          <BsChevronLeft />
        </div>
        <div className={cx("control", "next")}>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
