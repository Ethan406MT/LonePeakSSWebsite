import React, { useState } from "react";
import { SliderData } from "./sliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import "./slider.css"
import { SliderDataWords } from "./sliderData";


const SlideShow = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;


const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1 );
};
if (!Array.isArray(slides) || slides.length <= 0) {
    return null
};


        console.log(current);


    return (
        <section className="slider">
            <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />
            <FaArrowAltCircleLeft className="left-arrow"  onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
         return (
           <div className={index === current ? 'slide active' : 'slide'} key=
           {index}> 
           {index === current && ( 
            <img src={slide.image} alt="slideshow" className="image"/>
           )}
           </div>
         );
        }
         )}
        </section>
    );
};

export default SlideShow;



