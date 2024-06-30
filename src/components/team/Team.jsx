import { NavLink } from "react-router-dom"
import { teamMembers } from "../data"
import "./team.scss"

const Team = () => {
  return (
    <div className="team">
          <div className="teamtop"><h1>Meet Our Team_</h1></div>

          <div className="teamitems">
              {teamMembers.map((item)=>{
                return(
                    <div className="teamitem" key={item.id} title={item.title}>
                        <img src={item.img} alt="" />
                        <span className={item.id %2==0 ?"span":""}>{item.title.slice(0, 10)}...</span>
                    </div>
                )
              })}
          </div>

          <NavLink to="/about" className="explorebtn">Explore Full Team</NavLink>
    </div>
  )
}

export default Team