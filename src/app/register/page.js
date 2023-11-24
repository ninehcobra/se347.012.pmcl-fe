const Register = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="container">

                </div>
                <div className="bg_img hero-bg bottom_center" data-background="https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png" style={{ backgroundImage: 'url("https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png")' }}></div>
            </div>

            <section className="account-section padding-bottom">
                <div className="container">
                    <div className="account-wrapper mt--100 mt-lg--440">
                        <div className="left-side">
                            <div className="section-header">
                                <h2 className="title">HI, THERE</h2>
                                <p>You can log in to your Sbidu account here.</p>
                            </div>
                            <ul className="login-with">
                                <li>
                                    <a href="#0"><i className="fab fa-facebook"></i>Log in with Facebook</a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-google-plus"></i>Log in with Google</a>
                                </li>
                            </ul>
                            <div className="or">
                                <span>Or</span>
                            </div>
                            <form className="login-form">
                                <div className="form-group mb-30">
                                    <label for="login-email"><i className="far fa-envelope"></i></label>
                                    <input type="text" id="login-email" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <label for="login-pass"><i className="fas fa-lock"></i></label>
                                    <input type="password" id="login-pass" placeholder="Password" />
                                    <span className="pass-type"><i className="fas fa-eye"></i></span>
                                </div>

                                <div className="form-group">
                                    <a href="#0">Forgot Password?</a>
                                </div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="custom-button">LOG IN</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ backgroundColor: '#7757f7 ' }} className="right-side cl-white">
                            <div className="section-header mb-0">
                                <h3 className="title mt-0">NEW HERE?</h3>
                                <p>Sign up and create your Account</p>
                                <a href="sign-up.html" className="custom-button transparent">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register