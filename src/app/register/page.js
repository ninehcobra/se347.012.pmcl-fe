import Link from "next/link"

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
                                <h2 className="title">ĐĂNG KÝ</h2>
                                <p>Chúng tôi rất vui khi bạn ở đây.</p>
                            </div>

                            <form className="login-form">
                                <div className="form-group mb-30">
                                    <label for="login-email"><i className="far fa-envelope"></i></label>
                                    <input type="text" id="login-email" placeholder="Địa chỉ EMAIL" />
                                </div>
                                <div className="form-group mb-30">
                                    <label for="name"><i className="fa-solid fa-signature"></i></label>
                                    <input type="text" id="name" placeholder="Họ và tên" />
                                </div>
                                <div className="form-group mb-30">
                                    <label for="phone"><i className="fa-solid fa-phone"></i></label>
                                    <input type="text" id="phone" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group mb-30">
                                    <label for="address"><i className="fa-solid fa-map-location-dot"></i></label>
                                    <input type="text" id="address" placeholder="Địa chỉ" />
                                </div>
                                <div className="form-group">
                                    <label for="login-pass"><i className="fas fa-lock"></i></label>
                                    <input type="password" id="login-pass" placeholder="Mật khẩu" />
                                    <span className="pass-type"><i className="fas fa-eye"></i></span>
                                </div>
                                <div style={{ margin: '20px 0' }} className="form-group checkgroup mb-30">
                                    <input type="checkbox" name="terms" id="check" /><label for="check">Đồng ý với các điều khoản</label>
                                </div>

                                <div className="form-group mb-0">
                                    <button type="submit" className="custom-button">ĐĂNG KÝ</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ backgroundColor: '#7757f7 ' }} className="right-side cl-white">
                            <div className="section-header mb-0">
                                <h3 className="title mt-0">ĐÃ CÓ TÀI KHOẢN?</h3>
                                <p>Đăng nhập và đi tới bảng điều khiển</p>
                                <a href="/login" className="custom-button transparent">ĐĂNG NHẬP</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register