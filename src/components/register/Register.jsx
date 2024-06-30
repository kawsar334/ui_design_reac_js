import "./register.scss"

const Register = ({ open, setOpen }) => {

    const handleshow = () => {
       setOpen(!open)
    }
  return (
      <div className="registercomponent">
          <div className="registertop">register</div>
          <form action="" className="registerform">
              <div className="formitems">
                  <div className="formitem">
                      <input type="text" placeholder="username" />
                  </div>
                  <div className="formitem">
                      <input type="password" placeholder="password" />
                  </div>
                  <div className="formitem  ">
                      <input type="password" placeholder="Confirm password" />
                  </div>
                  <div className="formitem">
                      <button>Register</button>
                  </div>
                  <div className="formitem">
                      <p>already have an account? <a onClick={handleshow}>Login Here</a></p>
                  </div>
              </div>
          </form>
      </div>
  )
}

export default Register