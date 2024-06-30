import React from 'react'
import { studentList } from '../data'
import Slider from "react-slick";
import "./slide.scss"

const Slide = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <div>
            <Slider {...settings}>
                {studentList.map((item) => (
                    <div className='slideitem' title={item.name} key={item?.id}><img src={item.img} alt="" /></div>
                ))}
            </Slider>
        </div>
    )
}

export default Slide