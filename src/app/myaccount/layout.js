'use client'
import { AuthCheck } from "../components/authcheck"
import { useDispatch, useSelector } from 'react-redux'

export default function RootLayout({ children }) {
    const info = useSelector((state) => state.personalInfo)

    return (

        <div>
            <AuthCheck>
                <div className="hero-section style-2 pb-lg-400">
                    <div className="container">

                    </div>
                    <div className="bg_img hero-bg bottom_center" data-background="https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png" style={{ backgroundImage: 'url("https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png")' }}></div>
                </div>
                <section className="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-10 col-md-7 col-lg-4">
                                <div className="dashboard-widget mb-30 mb-lg-0">
                                    <div className="user">
                                        <div className="thumb-area">
                                            <div className="thumb">
                                                <img src="./assets/images/dashboard/user.png" alt="user" />
                                            </div>
                                            <label style={{ backgroundColor: '#8739e6' }} htmlFor="profile-pic" className="profile-pic-edit"><i className="fa-solid fa-pencil"></i></label>
                                            <input type="file" id="profile-pic" className="d-none" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><a href="#0">Percy Reed</a></h5>
                                            <span className="username">john@gmail.com</span>
                                        </div>
                                    </div>
                                    <ul className="dashboard-menu">
                                        <li>

                                            <a href="./dashboard" className="active">
                                                <i className="fa-solid fa-house-user"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./personalprofile"><i className="fa-solid fa-gears"></i>Personal Profile </a>
                                        </li>
                                        <li>
                                            <a href="./mybid"><i className="fa-solid fa-gavel"></i>My Bids</a>
                                        </li>
                                        <li>
                                            <a href="./winningbid"><i className="fa-solid fa-trophy"></i>Winning Bids</a>
                                        </li>
                                        <li>
                                            <a href="./notification"><i className="fa-solid fa-bell"></i>My Alerts</a>
                                        </li>
                                        <li>
                                            <a href="./favorites"><i className="fa-solid fa-heart"></i>My Favorites</a>
                                        </li>
                                        <li>
                                            <a href="./referrals"><i className="fa-solid fa-link"></i>Referrals</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </AuthCheck>
        </div>
    )
}