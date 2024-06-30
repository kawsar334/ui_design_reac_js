import { members } from "../../components/data"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./about.scss"

const About = () => {

    return (
        <div>
            <Navbar />

            <div className="about">
                <h1 className="a_header">Meet our team_</h1>
                <div className="aboutitems">
                    {members.map((item) => {
                        return (
                            <div className="aboutitem">
                                <img src={item.img} alt="Loading..." />
                                <div className="about_content">
                                    <h1>{item.name}</h1>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>


            <Footer />
        </div>
    )
}

export default About