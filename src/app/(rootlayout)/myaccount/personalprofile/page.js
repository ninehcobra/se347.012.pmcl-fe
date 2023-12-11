'use client'
import { useDispatch, useSelector } from 'react-redux'

const PersonalProfile = () => {
    const info = useSelector((state) => state.personalInfo)
    console.log(info)
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Thông tin cá nhân</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Sửa</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Tên</div>
                                <div className="info-value">{info.name}</div>
                            </li>

                            <li>
                                <div className="info-name">Địa chỉ</div>
                                <div className="info-value">{info.address}</div>
                            </li>
                        </ul>
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
                                <div className="info-value">{info.email}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Số điện thoại</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Sửa</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Mobile</div>
                                <div className="info-value">{info.phoneNumber}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item dashboard-widget">
                        <div className="header">
                            <h4 className="title">Bảo mật</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Sửa</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Mật khẩu</div>
                                <div className="info-value">xxxxxxxxxxxxxxxx</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProfile

