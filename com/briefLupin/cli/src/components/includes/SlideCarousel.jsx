import React from 'react';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import image1 from '../../img/client.png';
 
const SlideCarousel = () => {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div>
                <div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div>
                <div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div>
                <div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div><div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div>
                <div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div>
                <div className="swiper-slide" style={{backgroundImage:"url(" + image1+")"}}></div>
                
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
}
  
export default SlideCarousel;