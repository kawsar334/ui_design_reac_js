import "./shedule.scss"

const Shedule = () => {
    const items=[
        { id: 1, name: "html" }, { id: 2, name: "css" }, { id: 3, name: "SCSS" }, { id: 4, name: "node js" }, { id: 5, name: "express" }, { id: 6, name: "github" }, { id: 7, name: "firebase" },
        { id: 8, name: "mongodb" },
    ]
  return (
    <div className="shedule">
        <div className="shd_top">
              <h1>Next Batch Schedule</h1>
              <div className="shd_items">
                <div className="shd_item">
                      <img src="https://web.programming-hero.com/static/media/enrollment-start.781e854e.svg" alt="" />
                      <div>
                          <p>Enrollment Starts</p>
                          <h2>10 June, 2024</h2>
                      </div>
                </div>
                  <div className="shd_item">
                      <img src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg" alt="" />
                      <div>
                          <p>Enrollment Starts</p>
                          <h2>10 June, 2024</h2>
                      </div>
                  </div>
                  <div className="shd_item">
                      <img src="https://web.programming-hero.com/static/media/enrollment-start.781e854e.svg" alt="" />
                      <div>
                          <p>Enrollment Starts</p>
                          <h2>10 June, 2024</h2>
                      </div>
                  </div>
                  <div className="shd_item">
                      <img src="https://web.programming-hero.com/static/media/webinar.91b3d48f.svg" alt="" />
                      <div>
                          <p>Enrollment Starts</p>
                          <h2>10 June, 2024</h2>
                      </div>
                  </div>
              </div>
              <button className="shd_btn">Enroll Now</button>
        </div>
        <div className="shd_bottom">
              <h1>What you will learn_ from this course?</h1>
              <div className="shdbottom_items">
                {items.map((item)=>(
                    <div className="shd_item">{item.name}</div>
                ))}
              </div>

        </div>
    </div>
  )
}

export default Shedule