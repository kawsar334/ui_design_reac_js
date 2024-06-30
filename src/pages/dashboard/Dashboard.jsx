import { useState } from "react"
import { Dashboarditems } from "../../components/data"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./dashboard.scss"

const Dashboard = () => {
    const [items, setItems] = useState(Dashboarditems);    

    // filtering items 
    const handleItems = (type)=>{
        const filterItems = Dashboarditems.filter((item)=>item.type.toLocaleLowerCase() === type.toLocaleLowerCase());
        setItems(filterItems);
    }
    return (
        <div>
            <Navbar />

            <div className="dashboard">
                <div className="dashboardtop">
                    <p><span>কোর্স শুরুর গুরুত্তপূর্ণ নির্দেশনা গুলো দেখার জন্য </span><a href="#">Click here</a></p>
                    <h1>Welcome Back <span> Kawsar Firoz</span>, Ready For Your Next Lesson?
                    </h1>
                </div>
                <div className="dashboardmiddle">
                    <button onClick={() => handleItems("Level 1 course")}>Level 1 course</button>
                    <button onClick={() => handleItems("conceptual session")}>conceptual session</button>

                </div>
                <div className="dashboardbottom">
                    <div className="bottom_items">
                        

                        {items.map((item)=>{
                            return(
                                <div className="bottom_item" key={item.id}>
                                    <div className="b_item_left"><img src={item.img} alt="" /></div>
                                    <div className="b_item_right">
                                        <h2 className="title">{item.title}</h2>
                                        <p className="name">{item.name}</p>
                                        <div className="progressbar"></div>
                                        <button>Start course</button>
                                    </div>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard