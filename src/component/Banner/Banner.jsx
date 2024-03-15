// import { Box, Button } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import banner1 from "../../assets/bannerimg/banner1.jpg";
// import banner2 from "../../assets/bannerimg/banner2.jpg";
// import banner3 from "../../assets/bannerimg/banner3.jpg";
// import banner4 from "../../assets/bannerimg/banner4.jpg";
// import banner6 from "../../assets/bannerimg/banner6.jpg";
// const data = [{banner1},{banner2},{banner3},{banner4},{banner6}]
// const Banner = () => {
//   const [activeImageIndex, setactiveImageIndex] = useState(0);

//   const handlePreviousClick = () =>{
//     setactiveImageIndex(
//       !activeImageIndex? data.length-1 : activeImageIndex-1
//     );
//   };

//   const handleNextClick = () =>{
//     setactiveImageIndex((activeImageIndex + 1) % data.length);
//   };

//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//       handleNextClick();
//     }, 5000)
//     return () =>{
//       clearTimeout(timer);
//     }
//   }, [activeImageIndex]);
//   return (
//     <Box>
//       <Button onClick={handlePreviousClick}>Previous</Button>
//       {data.map((url, index)=>{
//         <img key={url} src={data} alt="img" />
//       })}
//       <Button onClick={handleNextClick}>Next</Button>
//     </Box>
//   )
// }

// export default Banner;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Banner.css"
import banner1 from "../../assets/bannerimg/banner1.jpg";
import banner2 from "../../assets/bannerimg/banner2.jpg";
import banner3 from "../../assets/bannerimg/banner3.jpg";
import banner4 from "../../assets/bannerimg/banner4.jpg";
import banner6 from "../../assets/bannerimg/banner6.jpg";
import { Box } from '@mui/material';

const images = [banner1, banner2, banner3, banner4, banner6];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>
  };

  return (
    <Box sx={{marginTop:"65px"}}>
      <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Banner ${index + 1}`} style={{ width: '100%', height: '300px' }} />
        </div>
      ))}
    </Slider>
    </Box>
  );
};

export default Banner;

