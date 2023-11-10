
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { Autoplay, EffectCoverflow } from 'swiper/modules'

import './movieSwiper.css'

const MovieSwiper = props => {
    return <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={
            {
                delay: 1500,
                disableOnInteraction: false
            }
        }
        coverflowEffect={
            {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }
        }
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className='movieSwiper'
    >
        {props.slides.map(slide => <SwiperSlide key={slide._id}>
            <img src={slide.previewImg} alt="Image_preview" onClick={()=>props.click(slide._id)}/>
        </SwiperSlide>)}

    </Swiper>
}

export default MovieSwiper