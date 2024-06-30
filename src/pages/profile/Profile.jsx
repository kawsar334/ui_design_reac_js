import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./profile.scss"

const Profile = () => {
    return (
        <div>
            <Navbar />

            <div className="profile">
                <div className="profilewrapper">
                    <div className="profiletop">
                        <div className="profile_top_main">
                            <div className="profile_top_progress_content">
                                <span>Complete your profile</span>
                                <span>40%</span>
                            </div>
                            <div className="profil_progress">
                                <div className="progress_mini"></div>
                            </div>
                            <h3>01/07</h3>
                        </div>
                    </div>
                    <div className="profilebottom">
                        <div className="p_sidebar">
                            <div className="sidebar_items">
                                <div className="sidebar_item">
                                    <img src="/mee.png" alt="" />
                                </div>
                                <div className="sidebar_item">
                                    <h1>kawsar firoz</h1>
                                    <p>+966509325731</p>
                                </div>
                                <div className="sidebar_item">
                                    <div className="progressbar">
                                        <div className="miniprogress"></div>
                                    </div>
                                    <span className="c_y_p_p"> Complete your Profile.</ span>
                                </div>
                                <div className="sidebar_item myprofile">
                                    <div className="my_profile_content">

                                        <img src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                                        <span>My Profile</span>
                                    </div>
                                </div>
                                <div className="sidebar_item ">
                                    <ul>
                                        <li>Additional</li>
                                        <li>Address</li>
                                        <li>Education</li>
                                        <li>Location</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p_contents">
                            <div className="p_content">
                                <div className="p_top">
                                    <h1>My Profile <span>Edit</span> </h1>
                                    <div className="p_items">
                                        <div className="p_item">
                                            <h2>fullName</h2>
                                            <p>kawsar firoz</p>
                                        </div>
                                        <div className="p_item">
                                            <h2>EMAIL</h2>
                                            <p>example@gmail.com</p>
                                        </div>
                                        <div className="p_item">
                                            <h2>fullName</h2>
                                            <p>kawsar firoz</p>
                                        </div>
                                        <div className="p_item">
                                            <h2>EMAIL</h2>
                                            <p>example@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile