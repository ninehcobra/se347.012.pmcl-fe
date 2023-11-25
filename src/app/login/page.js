import Link from "next/link"

const Login = () => {
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
                                <h2 className="title">CHÀO MỪNG QUAY TRỞ LẠI</h2>
                                <p>Bạn có thể đăng nhập vào ứng dụng tại đây.</p>
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
                                <div className="form-group" style={{ margin: '20px' }}>
                                    <a href="#0">Quên mật khẩu?</a>
                                </div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="custom-button">ĐĂNG NHẬP</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ backgroundColor: '#7757f7 ' }} className="right-side cl-white">
                            <div className="section-header mb-0">
                                <h3 className="title mt-0">LẦN ĐẦU?</h3>
                                <p>Đăng ký và tạo tài khoản ở đây</p>
                                <a href="/register" className="custom-button transparent">ĐĂNG KÝ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login