import "./factors.scss"
import Slider from "react-slick";
const Factors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="factory">
      <div className="ftop">
        <h1>X-Factors Of <br /> Programming Hero_</h1>
      </div>
      <div className="fbottom">
       <Slider {...settings}>
          <div className="factoritems">
            <div className="cart">
              <div className="cartleft">
                <h1>ZERO TO CAREER</h1>
                <p>You will <span>get everything</span> from the beginning of your</p>
                <p>journey <span>until you get an internship</span> or a full-time job.</p>
              </div>
              <div className="cartright">
                <img src="https://images.pexels.com/photos/15899541/pexels-photo-15899541/free-photo-of-djs-with-equipment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            </div>
          </div>
           <div className="factoritems">
            <div className="cart">
              <div className="cartleft">
                <h1>ZERO TO CAREER</h1>
                <p>You will <span>get everything</span> from the beginning of your</p>
                <p>journey <span>until you get an internship</span> or a full-time job.</p>
              </div>
              <div className="cartright">
                <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            </div>
          </div>
           <div className="factoritems">
            <div className="cart">
              <div className="cartleft">
                <h1>ZERO TO CAREER</h1>
                <p>You will <span>get everything</span> from the beginning of your</p>
                <p>journey <span>until you get an internship</span> or a full-time job.</p>
              </div>
              <div className="cartright">
                <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            </div>
          </div>

      </Slider>
      </div>
    </div>
  )
}

export default Factors