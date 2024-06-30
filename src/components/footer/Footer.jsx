import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerwrapper">
        <div className="footerleft">
          <h1>Office Address </h1>
          <ul>
            <li><a href="#">Taif shehar , kingdom saudi arabia</a></li>
            <li><a href="https://portfolio-c34cf.firebaseapp.com">kawsar firoz</a></li>
            <li><a href="#">(Available: Sat - Thu, 10:00 AM To 7:00 PM)</a></li>
            <li><a href="#">(Available: Sat - Thu, 10:00 AM To 7:00 PM)</a></li>

            {/* https://portfolio-c34cf.firebaseapp.com/ */}
          </ul>
        </div>
        <div className="footermiddle">
          <h1>Useful Links</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About me</a></li>
            <li><a href="/">Terms And condition</a></li>
          </ul>
        </div>
        <div className="footerright">
          <a href="#">

            <img src="https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Ffooter%2Fgoogle-play.webp&w=1920&q=75" alt="" />
          </a>
          <a href="#">
            <img src="https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Ffooter%2Fapp-store-apple.webp&w=1920&q=75" alt="" />
          </a>
          <a href="#">
            <img src="https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Ffooter%2Fmicrosoft.webp&w=1920&q=75" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer