import React from 'react';
import { Carousel } from 'antd';
import './style.css'
import ImagemBanner1 from '../../assets/img/banners/Banner1.jpg';
import ImagemBanner2 from '../../assets/img/banners/Banner2.jpg';
import ImagemBanner3 from '../../assets/img/banners/Banner3.jpg';


const CarouselDeImgs = () => (
  <Carousel autoplay>
    <img className="imgBanner" src={ImagemBanner1} alt="" />
    <img className="imgBanner" src={ImagemBanner2} alt="" />
    <img className="imgBanner" src={ImagemBanner3} alt="" />
  </Carousel>
);
export default CarouselDeImgs;