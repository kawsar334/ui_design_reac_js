import { useState } from "react";
import Slide from "../slider/Slider";
import { studentList } from "../data";
import "./studentlist.scss";



const StudentList = () => {
    const [openPopup, setOpenPopup] =useState(false)

    return (
        <div className="sl">
            <div className="slwrapper">
                <div className="sltop">
                    <h1>Heroes In Top Companies_</h1>
                    <p>70-80% of the students who finish our main course and SCIC on time get a job or an internship within 3-6 months of their completion.</p>
                </div>
                <div className="slmiddle">
                    <Slide />
                </div>
                <div className="slbottom">
                    <button onClick={()=>setOpenPopup(!openPopup)}>see your picture Here</button>
                </div>
            </div>
            {/* popup */}
            {openPopup && <div className="popup">
                <span onClick={() => setOpenPopup(!openPopup)}><i class="fa-solid fa-xmark"></i></span>
                <img src="https://web.programming-hero.com/home/icons/enroll-rocket.svg" alt="" />
                <div className="popuptop">
                    <h1>
                        Want to see yourself succeed?
                        Join the mission of becoming a Junior Web Developer in just 6 months.
                    </h1>
                    <p>On average, 70-80% of students secure an internship or job within 3-6 months after finishing the course.</p>
                </div>
                <h2>Enrollment start: 10 june, 2024</h2>
                <h2>Enrollment start: 24 june, 2024</h2>
            </div>}

        </div>
    )
}

export default StudentList