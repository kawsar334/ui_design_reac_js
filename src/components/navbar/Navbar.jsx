import { useEffect, useState } from "react";
import "./navbar.scss";
import { navlinks } from "../data";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className="navbar">
            <div className="navwrapper">
                <NavLink to="/" className="navleft">
                    <img src="https://web.programming-hero.com/home/ph_logo.svg" alt="Programming Hero Logo" />
                    <span>Programming Hero</span>
                </NavLink>

                <div className="navmiddle">
                    <ul>
                       
                        {navlinks.map((link) => (
                            <li key={link.id}>
                                <NavLink to={link.link}>{link.name}</NavLink>
                            </li>
                        ))}
                       
                        <li className="enrollbtn">
                            <a href="/enroll">Enroll now</a>
                        </li>
                        <li className="">
                            <NavLink to="/profile" className="p_picture">
                                <img src="/mee.png" alt="" />
                            </NavLink>
                        </li>
                    </ul>
                  
                </div>
                {open && (
                    <Menu  open={open} setOpen={setOpen}/>
                )}

                <div className="navright">
                   
                    {!open?<img
                        src="https://d3lhjpscbhcyrv.cloudfront.net/icons/ic_menu.svg"
                        alt="Menu Icon"
                        onClick={() => setOpen(!open)}
                    />:
                    <i class="fa-solid fa-xmark" onClick={() => setOpen(!open)}></i>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
