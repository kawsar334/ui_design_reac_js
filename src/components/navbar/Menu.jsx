import { NavLink } from "react-router-dom"
import { navlinks } from "../data"
import "./menu.scss"

const Menu = ({ open , setOpen}) => {
  return (
      <div className="menu_container">
         <div className="menu">
          <ul>
              {navlinks.map((link) => (
                  <li key={link.id} onClick={()=>setOpen(!open)}>
                      <NavLink to={link.link}>{link.name}</NavLink>
                  </li>
              ))}
                  <li className=""onClick={()=>setOpen(!open)}>
                      <NavLink to="/profile" className="p_picture">
                          <img src="/mee.png" alt="" />
                          <span>profile</span>
                      </NavLink>
                  </li>
              <li className="enrollbtn"onClick={()=>setOpen(!open)}>
                      <a href="/enroll">Enroll now</a>
              </li>
                  
          </ul>
      </div></div>
  )
}

export default Menu