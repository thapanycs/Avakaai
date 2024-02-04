import Carousel from 'react-bootstrap/Carousel';
import './Slider1.css'

function Slider1() {
  return (
    <div className='slider'>
    <Carousel fade >
      <Carousel.Item interval={2500}>
        <div className='box'>
          
          <img
          className="d-block w-100"
          src="/images/titlecard.png"
          alt="First slide"
          />
        
        </div>
      </Carousel.Item >
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="/images/pizza.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="/images/deliverypic.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider1;