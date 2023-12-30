'use client'
import Link from "next/link"
import axios from "../../../setup/axios"
import { useEffect, useState } from "react"
import { login } from "@/services/userService"
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation"
import { getUserAccount } from "@/services/userService"

const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleOnChange = (text, type) => {
        if (type === 'username') {
            setUsername(text)
        }
        else if (type === 'password') {
            setPassword(text)
        }
    }

    const fetchUser = async () => {
        let res = await getUserAccount()
        if (res && res.EC === 0 && res.DT) {
            router.push('/product')
        }
    }

    const inputValidation = () => {
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if (username === '' || password === '' || emailRegex.test(username) === false || passwordRegex.test(password) === false) {

            return false
        }

        return true
    }

    const handleLogin = async () => {

        let res = await login(username, password)
        if (res) {
            if (res.EC === 0) {
                let data = {
                    isAuthenticated: true,
                    token: res.DT.access_token,
                    account: {
                        name: res.DT.name,
                        address: res.DT.address,
                        avatar: res.DT.avatar,
                        email: res.DT.email,
                        gender: res.DT.gender,
                        roles: res.DT.roles
                    }
                }
                localStorage.setItem("jwt", res.DT.access_token)
                toast('Đăng nhập thành công')
                router.push('/product')
            }
            else if (res.EC === 3) {
                toast.error('Sai mật khẩu!')
            }
            else if (res.EC === 1) {
                toast.error('Tài khoản không tồn tài!')
            }
            else if (res.EC === 2) {
                toast.error('Vui lòng nhập đủ thông tin đăng nhập.')
            }
            else if (res.EC === -2) {
                toast.error('Lỗi phát sinh từ server')
            }
            else if (res.EC === -5) {
                toast.error('Không kết nối được với server')
            }
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

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

                            <div className="login-form">
                                <div className="form-group mb-30">
                                    <label htmlFor="login-email"><i className="far fa-envelope"></i></label>
                                    <input value={username} onChange={(e) => handleOnChange(e.target.value, 'username')} type="text" id="login-email" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="login-pass"><i className="fas fa-lock"></i></label>
                                    <input value={password} onChange={(e) => handleOnChange(e.target.value, 'password')} type="password" id="login-pass" placeholder="Password" />
                                    <span className="pass-type"><i className="fas fa-eye"></i></span>
                                </div>
                                <div className="form-group" style={{ margin: '20px' }}>
                                    <a href="#0">Quên mật khẩu?</a>
                                </div>
                                <div className="form-group mb-0">
                                    <button onClick={handleLogin} className="custom-button">ĐĂNG NHẬP</button>
                                </div>
                            </div>
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