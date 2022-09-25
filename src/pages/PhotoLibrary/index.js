import React, { useState } from "react";
import styles from "./PhotoLibrary.module.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Item10,
  Item11,
  Item12,
  Item13,
  Item14,
  Item15,
  Item16,
  Item17,
  Item18,
  Item19,
  Item20,
  Item21,
  Item22,
  Item23,
  Item24,
  Item25,
  Item26,
  Item27,
  Item28,
  Item29,
  Item30,
  Item31,
  Item32,
  Item33,
  Item35,
  Item36,
  Item37,
  Item38,
  Item39,
  Item4,
  Item40,
  Item41,
  Item42,
  Item34,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
} from "../../assets/img";
import {} from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import ItemImg from "../../components/ItemImg";
const cx = classNames.bind(styles);

const images = [
  {
    src: Item4,
  },
  {
    src: Item5,
  },
  {
    src: Item6,
  },
  {
    src: Item7,
  },
  {
    src: Item8,
  },
  {
    src: Item4,
  },
  {
    src: Item9,
  },
  {
    src: Item10,
  },
  {
    src: Item11,
  },
  {
    src: Item12,
  },
  {
    src: Item13,
  },
  {
    src: Item14,
  },
  {
    src: Item15,
  },
  {
    src: Item16,
  },
  {
    src: Item17,
  },
  {
    src: Item18,
  },
  {
    src: Item19,
  },
  {
    src: Item20,
  },
  {
    src: Item21,
  },
  {
    src: Item22,
  },
  {
    src: Item23,
  },
  {
    src: Item24,
  },
  {
    src: Item25,
  },
  {
    src: Item26,
  },
  {
    src: Item27,
  },
  {
    src: Item28,
  },
  {
    src: Item29,
  },
  {
    src: Item30,
  },
  {
    src: Item31,
  },
  {
    src: Item32,
  },
  {
    src: Item33,
  },
  {
    src: Item34,
  },
  {
    src: Item35,
  },
  {
    src: Item36,
  },
  {
    src: Item37,
  },
  {
    src: Item38,
  },
  {
    src: Item39,
  },
  {
    src: Item40,
  },
  {
    src: Item41,
  },
  {
    src: Item42,
  },
];

function PhotoLibrary() {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("content")}>
        <div className={cx("inner")}>
          <h2 className={cx("title")}>Thư viện ảnh</h2>
          <div className={cx("box-list")}>
            {images.map(image => (
                <ItemImg src={image.src} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <div className={cx("gallery")}>
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
