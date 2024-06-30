import CourseHero from "../../components/coursehero/CourseHero"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Video from "../../components/video/video"
import "./course.scss"

const Course = () => {
  return (
    <>
      <Navbar />
      <div className="course">
        <CourseHero />
        <Video/>
      </div>


      <Footer />
    </>
  )
}

export default Course