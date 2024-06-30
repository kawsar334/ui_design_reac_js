import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./success.scss"
import { successData } from "./successData"

const Success = () => {
    const [open, setOpen] = useState(false);
    const [sItems, setSitems] = useState(successData)
    const menuItems = [
        { id: 1, name: "All" }, { id: 2, name: "Batch 1" }, { id: 3, name: "Batch 2" }, { id: 4, name: "Batch 3" }, { id: 5, name: "batch 4" }, { id: 6, name: "batch 5" }, { id: 7, name: "batch 6" }, { id: 8, name: "batch 7" }, { id: 9, name: "batch 8" }, { id: 10, name: "batch 9" }, { id: 11, name: "batch 10" },
    ]


    const handleClick = (item) => {
        if (item === "All") {
            setSitems(successData);
        }else{
            const data = successData.filter((i) => { return i.batch.toLocaleLowerCase() == item.toLocaleLowerCase() });
            setSitems(data)
        }
        setOpen(!open);
    }
    return (
        <div>
            <Navbar />
            <div className="success">
                <div className="successtop">
                    <div className="s_top_left">
                        <h1>Successful Students</h1>
                        <p>আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে তাদের মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো ।</p>
                    </div>
                    <div className="s_top_right">
                        <h2 onClick={() => setOpen(!open)}>All Batch Students <span><i className="fa-solid fa-chevron-down"></i></span> </h2>
                        {open && <ul>
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.title} onClick={() => handleClick(item.name)}>{item.name}</li>
                                )
                            })}
                        </ul>}
                    </div>
                </div>
                <div className="successbottom">
                    <div className="s_items">
                        {sItems?.slice(0, 10).map((item) => {
                            return (
                                <div className="s_item" key={item.title}>
                                    <div className="item_left">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="item_right">
                                        <span>{item.company}</span>
                                        <span style={{ color:"rebeccapurple" }}>{item.batch}</span>
                                        <h1>{item.name}</h1>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc.slice(0, 50)}... <br /> <span>see more</span></p>

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

export default Success