import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './components.css';

function Hero(props) {
    
    
    return(
        <Jumbotron className='bg-transparent details jumbotron-fluid p=0'>
            <Container fluid={true}>
                <Row className='justify-content-center align-items-center py-5'>
                    <Col md={8} sm={12}>
                        { props.title && <h1 className='display-1 headline details'>{props.title}</h1> }
                        { props.subTitle && <h3 className='display-4 font-weight-light'>{props.subTitle}</h3> }
                        { props.text && <h3 className='lead font-weight-light'>{props.text}</h3> }
                    </Col>
    
                </Row>
    
            </Container>
    
        </Jumbotron>
            
    )
}

export default Hero;