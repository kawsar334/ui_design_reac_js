import Apollo from "../../components/apollo/Apollo"
import Faq from "../../components/faq/Faq"
import Footer from "../../components/footer/Footer"
import LavelTwoHero from "../../components/lavel2Hero/LavelTwoHero"
import Navbar from "../../components/navbar/Navbar"
import StudentList from "../../components/studentlist/StudentList"
import "./lavel2.scss"

const Lavel2 = () => {
  return (
  <>
  
  <Navbar/>
  <LavelTwoHero/>
  <Apollo/>                          

<StudentList/>
<Faq/>
  <Footer/>
  </>
  )
}

export default Lavel2