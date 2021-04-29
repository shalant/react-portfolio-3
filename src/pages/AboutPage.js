import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Hero from '../components/Hero';
import Content from '../components/Content';
import './pages.css';
import headshot from '../assets/images/headshot.jpg'

function AboutPage(props) {
    return(
        <Container>
            <Hero title={props.title} />

            <Content>
                <Image className='pic' src={headshot} fluid />
                <p className='about-me'>Full stack MERN junior developer, just graduated from Northwestern University Coding Bootcamp</p>

                <p className='about-me'>Recent graduate of the Northwestern University Coding Bootcamp. Specialty in the MERN stack. My favorite aspect of the course was working with classmates in group projects. For the last 20 years of my life I've been a professional musician. Highlights of that career include masterclasses at Princeton, Michigan, and multiple national tours, 20 recordings of original music, reviews in major music publications, etc. I have also taught thousands of private saxophone lessons.</p>
            
                <p></p>
            </Content>
        </Container>
    );
    
}

export default AboutPage;