
import Shedule from "../shedule/Shedule"
import "./coursehero.scss"

const CourseHero = () => {
  return (
    <div className="ch">
        <div className="ch_top">
              <h1>Breakthroughs Begin with learning, reach for the future you deserve</h1>
              <p>Master MongoDB, Express, React, and Node.js to build efficient, full-stack web applications from scratch. Connect front-end and back-end seamlessly for a smooth user experience.</p>
              <img src="https://web.programming-hero.com/static/media/React.fa7754d1.svg" alt="" className="ch_anim_img img_one" />
              <img src="https://web.programming-hero.com/static/media/Html.b47d1822.svg" alt="" className="ch_anim_img img_two" />
              <img src="https://web.programming-hero.com/static/media/Tailwind.ad0ef0ec.svg" alt="" className="ch_anim_img img_three" />
              <img src="https://web.programming-hero.com/static/media/React.fa7754d1.svg" alt="" className="ch_anim_img img_four" />

        </div>
        <div className="ch_bottom">
            <Shedule/>
        </div>
    </div>
  )
}

export default CourseHero