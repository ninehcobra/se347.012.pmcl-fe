'use client'
import Link from "next/link"
import "./header.scss"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const info = useSelector((state) => state.personalInfo)

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 54);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul className="customer-support">
                            <li>
                                <Link href={'/'}>
                                    <i className="fa-solid fa-phone"></i>
                                    <span className="ml-2 d-none d-sm-inline-block">Hỗ trợ khách hàng</span>
                                </Link>
                            </li>
                        </ul>
                        <ul style={info.name ? {} : { display: 'none' }} className="cart-button-area">
                            <li>
                                <Link className="cart-button" href={'/'}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="amount">08</span>
                                </Link>
                            </li>
                            <li>
                                <a className="user-button" href={'/myaccount/dashboard'}>
                                    <i className="fa-regular fa-user"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={isVisible ? 'header-bottom active' : 'header-bottom '}>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link href={'/'}>
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/News/logo.png"></img>
                            </Link>
                            <div>NINEH BIDING</div>
                        </div>
                        <ul className="menu ml-auto ">
                            <li className="menu-item-has-children">
                                <Link href={"/"}>Trang chủ</Link>
                                <ul className="submenu">
                                    <li>
                                        <Link href={"/"}>homepage 1</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>homepage 1</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"}>homepage 1</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/'}>Đấu giá</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Blog</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Liên hệ</Link>
                            </li>
                        </ul>
                        <form className="search-form">
                            <input type="text" placeholder="Tìm thương hiệu, mẫu mã,...."></input>
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header