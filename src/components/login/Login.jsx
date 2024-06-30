
import "./login.scss"

const Login = ({open, setOpen}) => {


  const handleshow= ()=>{
   setOpen(!open)
  }
  return (
    <div className="logincomponent">
      <div className="logintop">Login</div>
      <form action="" className="loginform">
        <div className="formitems">
          <div className="formitem">
            <input type="email" placeholder="Email" />
          </div>
          <div className="formitem">
            <input type="email" placeholder="Email" />
          </div>
          <div className="formitem checkboxcontainer ">
            <div className="checkbox">
            <input type="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="forgotpassword">
              <a href="#">Forgot Password</a>
            </div>
          </div>
          <div className="formitem">
            <button>Login</button>
          </div>
          <div className="formitem">
            <p>New user? <a onClick={handleshow}>Register Here</a></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login