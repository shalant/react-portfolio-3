import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Deck from '../components/Deck';
import './pages.css';
import ControlledCarousel from '../components/ControlledCarousel';

function HomePage(props) {
    return(
        <Container>
            <Hero title={props.title} subtitle={props.subTitle} text={props.text} />
            <ControlledCarousel/>
        </Container>
    )
}

export default HomePage;