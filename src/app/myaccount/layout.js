'use client'
import { AuthCheck } from "../components/authcheck"
import { useDispatch, useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function RootLayout({ children }) {
    const info = useSelector((state) => state.personalInfo)
    const path = usePathname();

    console.log(path)

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
                                                <img src={info.avatar ? info.avatar : "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"} alt="user" />
                                            </div>
                                            <label style={{ backgroundColor: '#8739e6' }} htmlFor="profile-pic" className="profile-pic-edit"><i className="fa-solid fa-pencil"></i></label>
                                            <input type="file" id="profile-pic" className="d-none" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><a href="#0">{info.name}</a></h5>
                                            <span className="username">{info.email}</span>
                                        </div>
                                    </div>
                                    <ul className="dashboard-menu">
                                        <li>

                                            <Link href="./dashboard" className={path === '/myaccount/dashboard' ? 'active' : ''}>
                                                <i className="fa-solid fa-house-user"></i>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="./personalprofile" className={path === '/myaccount/personalprofile' ? 'active' : ''}><i className="fa-solid fa-gears"></i>Personal Profile </Link>
                                        </li>
                                        <li>
                                            <Link href="./mybid" className={path === '/myaccount/mybid' ? 'active' : ''}><i className="fa-solid fa-gavel"></i>My Bids</Link>
                                        </li>
                                        <li>
                                            <Link href="./winningbid" className={path === '/myaccount/winningbid' ? 'active' : ''}><i className="fa-solid fa-trophy"></i>Winning Bids</Link>
                                        </li>
                                        <li>
                                            <Link href="./notification" className={path === '/myaccount/notification' ? 'active' : ''}><i className="fa-solid fa-bell"></i>My Alerts</Link>
                                        </li>
                                        <li>
                                            <Link href="./favorites" className={path === '/myaccount/favorites' ? 'active' : ''}><i className="fa-solid fa-heart"></i>My Favorites</Link>
                                        </li>
                                        <li>
                                            <Link href="./referrals" className={path === '/myaccount/referrals' ? 'active' : ''}><i className="fa-solid fa-link"></i>Referrals</Link>
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