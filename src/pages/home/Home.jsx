import Factors from "../../components/factors/Factors"
import Faq from "../../components/faq/Faq"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Impact from "../../components/impact/Impact"
import Navbar from "../../components/navbar/Navbar"
import StudentList from "../../components/studentlist/StudentList"
import Team from "../../components/team/Team"
import Technology from "../../components/tecnologies/Technology"
import "./home.scss"

const Home = () => {
  // 
  return (
    <div className="home">
        <Navbar/>
        <Hero/>
        <StudentList/>
        <Impact/>
        <Factors/>
        <Technology/>
        <Team/>
        <Faq/>
        <Footer/>
         

    </div>
  )
}

export default Home