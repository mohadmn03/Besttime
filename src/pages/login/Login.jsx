import "./Login.css"
//
export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Besttime</h3>
                <span className="loginDesc">Connect with friends and world around you on Besttime.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForget">Forget Password?</span>
                     <button className="loginRegisterButton">Creat a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
