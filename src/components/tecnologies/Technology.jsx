import { useState } from "react";
import { tech } from "../data"
import "./tech.scss";
import Slider from "react-slick";

const Technology = () => {
    const [openPopup, setOpenPopup] = useState(false)
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <div className="tech">
            <div className="techtop">
                <h1>What Will You Learn?_</h1>
                <p>The web course consists of 80+ modules, 25+ course projects, 15+ practice projects and 12 assignments.</p>
            </div>
            <div className="techbottom">
                <Slider {...settings}>
                    {tech.map((item) => {
                        return (
                            <div className="techitem">
                                <img src={item.image ||"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." />
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className="techbtn">
                <button onClick={() => setOpenPopup(!openPopup)}>Join Now</button>
            </div>


            {openPopup && <div className="popup">
                <span onClick={() => setOpenPopup(!openPopup)}><i class="fa-solid fa-xmark"></i></span>
                <img src="https://web.programming-hero.com/home/icons/enroll-rocket.svg" alt="" />
                <div className="popuptop">
                    <h1>
                        Just 38 more hours!!! Let’s crack the career
                    </h1>

                </div>
                <h2>Enrollment start: 10 june, 2024</h2>
                <h2>Enrollment start: 24 june, 2024</h2>
            </div>}
        </div>
    )
}

export default Technology