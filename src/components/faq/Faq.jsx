import { useState } from "react"
import { faqItems } from "../data"
import "./faq.scss"

const Faq = () => {
    const [showDesc, setShowdesc] =useState(1)
    const [open, setOpen] = useState(false)

    const handleShow = (id)=>{
       setShowdesc(id)
       if(showDesc== id){
        setOpen(!open)
       }

    }
  return (
    <div className="faq">
        <div className="faqwrapper">
        <div className="faqleft">
                  <h1>Faq_</h1>
        </div>
        <div className="faqright">
            <div className="faqitems">
                {faqItems.slice(0,10).map((item)=>{
                    return(
                        <div className="faqitem">
                            <div className="title" onClick={()=>handleShow(item.id)}>{item.title}
                                {showDesc == item.id ?<span><i class="fa-solid fa-arrow-up"></i></span>:
                              <span><i class="fa-solid fa-arrow-down"></i></span>}</div>
                            {showDesc == item.id &&<div className="desc" onClick={()=>setOpen(false)}>{item.desc}</div>}
                        </div>
                    )
                })}
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Faq