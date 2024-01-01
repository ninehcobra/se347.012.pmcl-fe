'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getUserAccount } from '@/services/userService'
import UserInfoForm from './_components/userinfoform'
import PhoneForm from './_components/phoneform'
import PasswordForm from './_components/passwordform'

const PersonalProfile = () => {

    const [info, setInfo] = useState(null)
    const [refesh, setRefesh] = useState(false)
    const [isEditUserInfo, setIsEditUserInfo] = useState(false)
    const [isEditPhoneNumber, setIsEditPhoneNumber] = useState(false)
    const [isChangePassword, setIsChangePassword] = useState(false)

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

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Thông tin cá nhân</h4>
                            <span onClick={() => setIsEditUserInfo(!isEditUserInfo)} className="edit"><i style={{ marginRight: '4px' }} className="fa-solid fa-pen"></i>{!isEditUserInfo ? 'Sửa' : 'Hủy'}</span>
                        </div>
                        {
                            !isEditUserInfo
                                ?
                                <ul className="dash-pro-body">
                                    <li>
                                        <div className="info-name">Tên</div>
                                        <div className="info-value">{info ? info.name : ''}</div>
                                    </li>

                                    <li>
                                        <div className="info-name">Địa chỉ</div>
                                        <div className="info-value">{info ? info.address : ''}</div>
                                    </li>
                                </ul>
                                :
                                <UserInfoForm info={info} setIsEditUserInfo={setIsEditUserInfo} />
                        }
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Cài đặt tài khoản</h4>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Ngôn Ngữ</div>
                                <div className="info-value">Tiếng Việt (Việt Nam)</div>
                            </li>
                            <li>
                                <div className="info-name">Múi giờ</div>
                                <div className="info-value">(UTC +07:00) Coordinated Universal Time</div>
                            </li>
                            <li>
                                <div className="info-name">Trạng thái</div>
                                <div className="info-value"><i className="flaticon-check text-success"></i> Kích hoạt</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Địa chỉ email</h4>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Email</div>
                                <div className="info-value">{info ? info.email : ''}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Số điện thoại</h4>
                            <span onClick={() => setIsEditPhoneNumber(!isEditPhoneNumber)} className="edit"><i style={{ marginRight: '4px' }} className="fa-solid fa-pen"></i>{!isEditPhoneNumber ? 'Sửa' : 'Hủy'}</span>
                        </div>

                        {
                            !isEditPhoneNumber
                                ?
                                <ul className="dash-pro-body">
                                    <li>
                                        <div className="info-name">Mobile</div>
                                        <div className="info-value">{info ? info.phoneNumber : ''}</div>
                                    </li>
                                </ul>
                                :
                                <PhoneForm info={info} setIsEditUserInfo={setIsEditPhoneNumber} />
                        }

                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item dashboard-widget">
                        <div className="header">
                            <h4 className="title">Bảo mật</h4>
                            <span onClick={() => setIsChangePassword(!isChangePassword)} className="edit"><i style={{ marginRight: '4px' }} className="fa-solid fa-pen"></i>{!isChangePassword ? 'Sửa' : 'Hủy'}</span>
                        </div>
                        {
                            !isChangePassword
                                ?
                                <ul className="dash-pro-body">
                                    <li>
                                        <div className="info-name">Mật khẩu</div>
                                        <div className="info-value">xxxxxxxxxxxxxxxx</div>
                                    </li>
                                </ul>
                                :
                                <PasswordForm info={info} setIsEditUserInfo={setIsChangePassword} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProfile

