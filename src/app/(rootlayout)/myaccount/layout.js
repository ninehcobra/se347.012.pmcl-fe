'use client'
import { AuthCheck } from "../../components/authcheck"
import { useDispatch, useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useEffect, useState } from "react"
import { getUserAccount, logOut, updateUser } from "@/services/userService"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function RootLayout({ children }) {
    const [info, setInfo] = useState(null)
    const path = usePathname();
    const router = useRouter();
    const [refesh, setRefesh] = useState(false)

    const fetchUser = async () => {
        let res = await getUserAccount()
        if (res && res.EC === 0 && res.DT) {
            setInfo(res.DT)
            console.log(res.DT)
        }
        else {
            router.push('/login')
        }
    }

    useEffect(() => {
        fetchUser()
    }, [refesh])


    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                // Tải ảnh lên Cloudinary
                const formData = new FormData();
                formData.append('file', file);
                formData.append("cloud_name", "dwpz7w8y4");
                formData.append('upload_preset', 'bleu4scs');

                const response = await fetch('https://api.cloudinary.com/v1_1/dwpz7w8y4/image/upload', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                // Lấy URL của ảnh từ kết quả trả về
                const imageUrl = data.secure_url;

                // Lưu URL ảnh vào state hoặc làm bất kỳ điều gì bạn muốn
                let res = await updateUser({ avatar: imageUrl })
                if (res && res.EC === 0) {
                    toast('Cập nhật ảnh thành công')
                    setRefesh(!refesh)
                }

                console.log('Image URL:', imageUrl);
            } catch (error) {
                console.error('Error uploading image to Cloudinary:', error);
            }
        }
    };

    const handleLogOut = async () => {

        let res = await logOut()
        if (res.EC === 0) {
            await localStorage.removeItem('jwt')
            window.location.href = '/login'
        }

    }

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
                                            <div >
                                                <img style={{ height: '80px', width: '80px', borderRadius: '50%' }} src={info && info.avatar ? info.avatar : "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"} alt="user" />
                                            </div>
                                            <label style={{ backgroundColor: '#8739e6' }} htmlFor="profile-pic" className="profile-pic-edit"><i className="fa-solid fa-pencil"></i></label>
                                            <input onChange={handleImageUpload} type="file" id="profile-pic" className="d-none" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title"><a href="#0">{info ? info.name : ''}</a></h5>
                                            <span className="username">{info ? info.email : ''}</span>
                                        </div>
                                    </div>
                                    <ul className="dashboard-menu">
                                        <li>

                                            <Link href="./dashboard" className={path === '/myaccount/dashboard' ? 'active' : ''}>
                                                <i className="fa-solid fa-house-user"></i>
                                                Bảng điều khiển
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="./personalprofile" className={path === '/myaccount/personalprofile' ? 'active' : ''}><i className="fa-solid fa-gears"></i>Thông tin cá nhân</Link>
                                        </li>

                                        <li>
                                            <Link href="./winningbid" className={path === '/myaccount/winningbid' ? 'active' : ''}><i className="fa-solid fa-trophy"></i>Đấu giá thắng</Link>
                                        </li>

                                        <li>
                                            <Link href="./favorites" className={path === '/myaccount/favorites' ? 'active' : ''}><i className="fa-solid fa-heart"></i>Deal yêu thích</Link>
                                        </li>

                                        <li>
                                            <a onClick={handleLogOut}>
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                Đăng xuất
                                            </a>
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