import { useNavigate } from "react-router-dom"
import "./error.scss"
import { useEffect } from "react"

export const Error = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            navigate("/")
        }, 2000);
        return ()=>clearTimeout(timeoutId);
    },[navigate])
  return (
    <a href="/" className="error">
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="" />
          
    </a>
  )
}
