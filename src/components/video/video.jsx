import "./video.scss"

const Video = () => {
  return (
    <div className="video">
          <a href="https://www.youtube.com/watch?time_continue=7&v=5O5e0nnVulY&embeds_referring_euri=https%3A%2F%2Fweb.programming-hero.com%2F&source_ve_path=Mjg2NTgsMjg2NjY&feature=emb_logo" target="_blank"> 
              <img src="https://web.programming-hero.com/static/media/courseThumbnail.cdaf4694.jpg" alt="" />
          </a>

          <div className="videobottom">
            <div className="video_item">
                <h1>950+ videos</h1>
                  <p>The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack <button>Read More</button></p>  
            </div>
              <div className="video_item">
                  <h1>950+ videos</h1>
                  <p>The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack <button>Read More</button></p>
              </div>
              <div className="video_item">
                  <h1>950+ videos</h1>
                  <p>The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack <button>Read More</button></p>
              </div>
          </div>
        
    </div>
  )
}

export default Video