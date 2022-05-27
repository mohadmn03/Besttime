import "./Register.css"
//
export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Besttime</h3>
                <span className="loginDesc">Connect with friends and world around you on Besttime.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="passowrd" className="loginInput" />
                    <input type="Password" placeholder="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                     <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
