
import '../asset/css/login.css';

function Login() {
  return (
        <div class="Overall-container">
            <div className='Left-login-side' style={{"background-image": 'url("images/hector-j-rivas-1FxMET2U5dU-unsplash.jpg")',"background-size":"300px 100px","background-repeat": "no-repeat" ,"background-size": "cover"}}>
                <div className='Title-website'>     
                    <h3><i>Finding jobs</i></h3>
                </div>
                <div className='image-background'>
                </div>
                <div className='Words-gretting'>
                    <h3>Welcome!</h3>
                    <p><i>Our mission is to assit you have a  good job in a great envirorment.<br></br> We are here for you with all passion and enthusiasm.</i></p>
                </div>
            </div>
            <div className='Right-login-side'>
                <div className='Form-information'>
                <div class="cont">
                    <div class="form sign-in">
                        <h2>Welcome back,</h2>
                        <label>
                        <span>Email</span>
                        <input type="email" />
                        </label>
                        <label>
                        <span>Password</span>
                        <input type="password" />
                        </label>
                        <p class="forgot-pass">Forgot password?</p>
                        <button type="button" class="submit">Sign In</button>
                        <button type="button" class="fb-btn">Connect with <span>Linkedin</span></button>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
);
}
;;

export default Login;
