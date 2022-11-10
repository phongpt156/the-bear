import React from 'react';
import css from '../CarouselSlider/Slider.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import bear1 from '../CarouselSlider/bearOne.png';
import bear2 from '../CarouselSlider/bearTwo.png';
import bear3 from '../CarouselSlider/bearThree.png';
import bear4 from '../CarouselSlider/bearFour.png';
import bear5 from '../CarouselSlider/bearFive.png';
import arrowLeft from '../CarouselSlider/Polygon 1.png';
import arrowRight from '../CarouselSlider/Polygon 2.png'





export default class CarouselSlider extends React.Component {
    render() {
        return (
            <CarouselProvider className={css.provider}
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={5}
            >
                <Slider className={css.slider}>
                    <Slide className={css.slide} index={0}><img src={bear1} />TARO TARO</Slide>
                    <Slide className={css.slide} index={1}><img src={bear2} />PUNGPU</Slide>
                    <Slide className={css.slide} index={2}><img src={bear3} />PONG PAY</Slide>
                    <Slide className={css.slide} index={3}><img src={bear4} />HONG HOT</Slide>
                    <Slide className={css.slide} index={4}><img src={bear5} />BIET TOUT</Slide>
                </Slider>
                <ButtonBack className={css.btnPrev}><img src={arrowLeft} /></ButtonBack>
                <ButtonNext className={css.btnNext}><img src={arrowRight} /></ButtonNext>
            </CarouselProvider>
        );
    }
}