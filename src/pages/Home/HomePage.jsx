import { React } from 'react';
import SlideShow from './header/SlideShow';
import { Header, Contact } from "./index"
import { SliderData } from './header/sliderData';


export default function Home() {
    return (
        <div className='HomePage'>  
       
        <Header />
        <Contact />
    </div>
    );
};

//add example carousel  <div><SlideShow slides={SliderData} /></div>
//Make Header carousel