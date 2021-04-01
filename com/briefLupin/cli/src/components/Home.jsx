import React, { useState } from 'react';
import oom from '../img/perles.png';
import oom2 from '../img/jewelry.png';
import slide1 from '../img/bijoux.png';
import { FixedNavTop, NavBar } from './';



import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import SlideCarousel from './includes/SlideCarousel';

const HomePage = (props) => {
    
        const items = [
            {
              src:slide1,
              altText: 'Slide 1',
              caption: 'Slide 1'
            },
            {
              src: slide1,
              altText: 'Slide 2',
              caption: 'Slide 2'
            },
            {
              src: slide1,
              altText: 'Slide 3',
              caption: 'Slide 3'
            }
          ];
          
            const [activeIndex, setActiveIndex] = useState(0);
            const [animating, setAnimating] = useState(false);
          
            const next = () => {
              if (animating) return;
              const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
              setActiveIndex(nextIndex);
            }
          
            const previous = () => {
              if (animating) return;
              const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
              setActiveIndex(nextIndex);
            }
          
            const goToIndex = (newIndex) => {
              if (animating) return;
              setActiveIndex(newIndex);
            }

            const slides = items.map((item) => {
                return (
                    <CarouselItem
                        onExiting={() => setAnimating(true)}
                        onExited={() => setAnimating(false)}
                        key={item.caption}
                    >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                    </CarouselItem>
                );
            });
            
              
        return (
            
            <div>
                <FixedNavTop/>
                <NavBar/>
                {/* <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel> */}
                <SlideCarousel/>
                <div className="container mt-4">
                    <div className="row">
                        <div className=" col-sm-6">
                            <img src={oom} alt="" className="img-fluid w-75"></img>
                        </div>
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card-body">
                                <h5 className="card-title">jewelry</h5>
                                <h6 className="card-subtitle mb-2 text-muted">2000 Dhs <del>2400 Dhs</del></h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}> Buy New</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6" style={{alignItems:'center', display:'flex', textAlign:'start'}}>
                            <div className="card-body">
                                <h5 className="card-title">Bague</h5>
                                <h6 className="card-subtitle mb-2 text-muted">2000 Dhs <del>2400 Dhs</del></h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btnCss btn btn-warning px-4 py-2" style={{borderRadius:'30px'}}> Buy New</button>
                            </div>
                        </div>
                        <div className=" col-sm-6">
                            <img src={oom2} alt="" className="img-fluid w-75"></img>
                        </div>
                    </div>
                </div>
  
            </div>
        );
    
}
 
export  {HomePage};