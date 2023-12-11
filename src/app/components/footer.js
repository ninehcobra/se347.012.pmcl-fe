'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Footer = (params) => {
    const [notification, setNotification] = useState(true)

    useEffect(() => {
        if (params && params.notification === false) {
            console.log('2')
            setNotification(params.notification)
        }
    }, [

    ])


    const router = useRouter()
    return (
        <footer style={{ backgroundImage: 'url("https://pixner.net/sbidu/main/assets/images/footer/footer-bg.jpg")' }} className="bg_img padding-top oh">
            <div className="footer-top-shape">
                <img src="https://pixner.net/sbidu/main/assets/css/img/footer-top-shape.png"></img>
            </div>
            <div className="anime-wrapper">
                <div className="anime-1 plus-anime">
                    <img src="https://pixner.net/sbidu/main/assets/images/footer/p1.png" alt="footer" />
                </div>
                <div className="anime-2 plus-anime">
                    <img src="https://pixner.net/sbidu/main/assets/images/footer/p2.png" alt="footer" />
                </div>
                <div className="anime-3 plus-anime">
                    <img src="https://pixner.net/sbidu/main/assets/images/footer/p3.png" alt="footer" />
                </div>
                <div className="anime-5 zigzag">
                    <img src="https://pixner.net/sbidu/main/assets/images/footer/c2.png" alt="footer" />
                </div>
                <div className="anime-6 zigzag">
                    <img src="https://pixner.net/sbidu/main/assets/images/footer/c3.png" alt="footer" />
                </div>
                <div className="anime-7 zigzag">
                    <img src="https://pixner.net/sbidu/main/assets/images/footer/c4.png" alt="footer" />
                </div>
            </div>
            {
                notification ? <div className="newslater-wrapper">
                    <div className="container">
                        <div className="newslater-area">
                            <div className="newslater-thumb">
                                <img src="https://pixner.net/sbidu/main/assets/images/footer/newslater.png"></img>
                            </div>
                            <div className="newslater-content">
                                <div className="section-header">
                                    <h5 className="cate">Đăng ký theo dõi NINEH BIDING</h5>
                                    <h3 className="title">Để nhận được các thông báo về các ưu đãi sớm nhất. </h3>
                                </div>
                                <form className="subscribe-form">
                                    <input type="text" placeholder="Nhập email của bản" name="email" />
                                    <button type="submit" className="custom-button">Đăng KÝ</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }

            <div className="footer-top padding-bottom padding-top">
                <div className="container">
                    <div className="row mb--60">
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-widget widget-links">
                                <h5 className="title">Danh mục đấu giá</h5>
                                <ul className="links-list">
                                    <li>
                                        <a href="#0">Sắp kết thúc</a>
                                    </li>
                                    <li>
                                        <a href="#0">Xe cộ</a>
                                    </li>
                                    <li>
                                        <a href="#0">Đồng hồ</a>
                                    </li>
                                    <li>
                                        <a href="#0">Đồ điện tử</a>
                                    </li>
                                    <li>
                                        <a href="#0">Bất động sản</a>
                                    </li>
                                    <li>
                                        <a href="#0">Đá quý</a>
                                    </li>
                                    <li>
                                        <a href="#0">Nghệ thuật</a>
                                    </li>
                                    <li>
                                        <a href="#0">Thể thao &amp; Ngoài trời</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-widget widget-links">
                                <h5 className="title">Về chúng tôi</h5>
                                <ul className="links-list">
                                    <li>
                                        <a href="#0">Về NINEH BIDING</a>
                                    </li>
                                    <li>
                                        <a href="#0">Hỗ trợ</a>
                                    </li>
                                    <li>
                                        <a href="#0">Chi nhánh</a>
                                    </li>
                                    <li>
                                        <a href="#0">Jobs</a>
                                    </li>

                                    <li>
                                        <a href="#0">Blog của chúng tôi</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-widget widget-links">
                                <h5 className="title">Chúng tôi sẵn sàng giúp đỡ</h5>
                                <ul className="links-list">
                                    <li>
                                        <a href="#0">Tài khoản</a>
                                    </li>
                                    <li>
                                        <a href="#0">An toàn và bảo mật</a>
                                    </li>
                                    <li>
                                        <a href="#0">Thông tin giao hàng</a>
                                    </li>
                                    <li>
                                        <a href="#0">Kết nối với chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="#0">Hỗ trợ &amp; FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-widget widget-follow">
                                <h5 className="title">Theo dõi chúng tôi</h5>
                                <ul className="links-list">
                                    <li>
                                        <a href="callto:0797260870"><i className="fas fa-phone-alt"></i>0797260870</a>
                                    </li>
                                    <li>
                                        <a href="callto:0797260870"><i className="fas fa-blender-phone"></i>0797260870</a>
                                    </li>
                                    <li>
                                        <a href="mailto:congchinh2903@gmail.com"><i className="fas fa-envelope-open-text"></i>congchinh2903@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="https://maps.app.goo.gl/EcxH1YfpfcTpLANc8"><i className="fas fa-location-arrow"></i>VNU-HCM University of Information Technology</a>
                                    </li>
                                </ul>
                                <ul className="social-icons">
                                    <li>
                                        <a href="https://www.facebook.com/congchinh.truongnguyen.5/" ><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright-area">
                        <div className="footer-bottom-wrapper">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="logo">
                                <Link href={'/'}>
                                    <img style={{ height: '40px', width: '40px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png"></img>
                                </Link>
                                <div style={{ color: 'white', fontWeight: 'bold' }}>NINEH BIDING</div>
                            </div>
                            <ul className="gateway-area">
                                <li>
                                    <a href="https://www.paypal.com/"><img src="https://pixner.net/sbidu/main/assets/images/footer/paypal.png" alt="footer" /></a>
                                </li>
                                <li>
                                    <a href="https://www.visa.com.vn/"><img src="https://pixner.net/sbidu/main/assets/images/footer/visa.png" alt="footer" /></a>
                                </li>
                                <li>
                                    <a href="https://www.discovery.co.za/"><img src="https://pixner.net/sbidu/main/assets/images/footer/discover.png" alt="footer" /></a>
                                </li>
                                <li>
                                    <a href="https://www.mastercard.com.vn/"><img src="https://pixner.net/sbidu/main/assets/images/footer/mastercard.png" alt="footer" /></a>
                                </li>
                            </ul>
                            <div className="copyright"><p>© Copyright 2023 | <a href="https://www.facebook.com/congchinh.truongnguyen.5/">NINEH BIDING </a> BY <a href="https://www.facebook.com/congchinh.truongnguyen.5/">NINEH</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer