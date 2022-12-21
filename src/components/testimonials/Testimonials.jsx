import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Slider from 'react-slick'
import './testimonilas.css'
import testimonialImg from '../../assets/images/review1.png'

const Testimonials = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
  return (
    <section>
        <Container>
            <Row>
                <Col lg='8' md='12' sm='12' className='m-auto'>

                    <div className="slider__wrapper d-flex align-items-center gap-5">
                        <div className="slider__content w-50">
                            <h2 className='mb-4'>What our customers are saying</h2>
                            <Slider {...settings}>
                                <div>
                                    <div className="single__testimonial">
                                        <p className="review__content">
                                           "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Quisquam adipisci distinctio eveniet accusamus delectus 
                                            quas voluptate cumque! Illum fuga vero quae vitae harum, 
                                            adipisci aliquam ex? Ipsa a provident asperiores."
                                        </p>
                                        <h6>John Doe</h6>
                                        <p>Web Developer</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="single__testimonial">
                                        <p className="review__content">
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Quisquam adipisci distinctio eveniet accusamus delectus 
                                            quas voluptate cumque! Illum fuga vero quae vitae harum, 
                                            adipisci aliquam ex? Ipsa a provident asperiores."
                                        </p>
                                        <h6>John Doe</h6>
                                        <p>Web Developer</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="single__testimonial">
                                        <p className="review__content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam adipisci distinctio eveniet accusamus delectus quas voluptate cumque! Illum fuga vero quae vitae harum, adipisci aliquam ex? Ipsa a provident asperiores.
                                        </p>
                                        <h6>John Doe</h6>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className='slider__img w-50'>
                            <img className='w-100' src={testimonialImg} alt="/" />
                        </div>
                    </div>
                   
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonials