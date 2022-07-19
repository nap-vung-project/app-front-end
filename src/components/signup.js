import '../asset/css/signup.css';

function Signup() {
  return (
        <div className="Overall-container">
            <div className='Left-login-side'>
            <div className="slider">
                <div className="slide">
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1>Finding jobs<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p>Nap Vung Team</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
            </div>           
            </div>            
            <div className='Right-login-side'>
                <div className='Form-information'>
                <div className="cont">
                    <div className="form sign-in">
                    <div className='Title-sologan'>
                        <div className='welcoming'>
                        <h2>Welcome to </h2>
                        </div>
                        <div className='Ourname-company'>
                        <h3>Finding jobs</h3>
                        </div>
                    </div>
                        <p>we create an equal envirorment for everybody.</p>
                        <label>
                        <span>Full name</span>
                        <input type="text" />
                        </label>
                        <label>
                        <span>Phone number</span>
                        <input type="text" />
                        </label>
                        <label>
                        <span>Adress</span>
                        <input type="email" />
                        </label>
                        <label>
                        <span>Password</span>
                        <input type="password" />
                        </label>
                        <button type="button" className="submit">Sign Up</button>
                    </div>
                    <div className=''>
                        <div>
                    </div>
                    <div className="Recomend-signup">
                            <div className='waytosigup'>
                                <p><i>Or sign up with</i></p>
                            </div>
                            <div className='Offer-signup'>
                                <div className='Chanel-sign'>
                                    <h3>Facebook</h3>
                                </div>
                                <div className='Chanel-sign'>
                                    <h3>Linkedin</h3>
                                </div>
                                <div className='Chanel-sign'>
                                    <h3>Google</h3>                             
                                </div>
                        </div>  
                    </div>
                </div>
            </div> 
            </div> 
        </div>
    </div>
    

);
}


export default Signup;

