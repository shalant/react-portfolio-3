import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Deck from '../components/Deck';
import './pages.css';
import ControlledCarousel from '../components/ControlledCarousel';

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} subtitle={props.subTitle} text={props.text} />
            <ControlledCarousel/>
        </div>
    )
}

export default HomePage;