import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import dynamicWine from '../assets/images/dynamicWine.png'
import informedTrades from '../assets/images/informedTrades.png'
import employeeDirectory from '../assets/images/employeeDirectory.png'
import SchedulerAppScreenshot from '../assets/images/SchedulerAppScreenshot.png';
import './components.css'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dynamicWine}
          alt="Dynamic Wines"
        />
        <Carousel.Caption >
          <h3 className='black-text'>Dynamic Wines</h3>
          <p className='black-text'>
              A CRUD app using the MERN stack, helps a restaurant present their wine list with an interactive map, filters, and modals
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={informedTrades}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='black-text'>Informed Trades</h3>
          <p className='black-text'>
            Informed Trades empower users by combining basic stock info with contemporary news stories.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={employeeDirectory}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='black-text'>Employee Directory</h3>
          <p className='black-text'>
            This app takes an employee directory and makes it searchable by a variety of fields. In addition, the list of employees can be sorted by name.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );


//render(<ControlledCarousel />);
  }