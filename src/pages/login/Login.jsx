import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Register from "../../components/register/Register";
import LoginComponen from "../../components/login/Login";

import "./login.scss";
import { useState } from "react";

const Login = () => {
    const [open, setOpen] =useState(true);
    
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="loginleft">
                    {open?<LoginComponen open={open} setOpen={setOpen}  />:
                        <Register open={open} setOpen={setOpen}  />}
                </div>
                    <img src="https://web.programming-hero.com/static/media/bgSlice.b9d8c29c.svg" alt="" className="loginimage" />
            </div>
            <Footer />
        </>
    )
}

export default Login