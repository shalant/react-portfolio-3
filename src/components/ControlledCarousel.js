import React from 'react';
import { Carousel } from 'react-bootstrap';
import dynamicWine from '../assets/images/dynamicWine.png'
import informedTrades from '../assets/images/informedTrades.png'
import employeeDirectory from '../assets/images/employeeDirectory.png'
import SchedulerAppScreenshot from '../assets/images/SchedulerAppScreenshot.png'

export default function ControlledCarousel() {
    {/*const [index, setIndex] = useState(0);*/}

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
    
  return (
    <Carousel /*activeIndex={index} onSelect={handleSelect}*/>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dynamicWine}
          alt="Dynamic Wines"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={informedTrades}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={employeeDirectory}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );


{/*render(<ControlledCarousel />);*/}
  }
