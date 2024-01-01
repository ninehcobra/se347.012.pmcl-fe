'use client'

import { updatePassword, updateUser } from "@/services/userService"
import { useState } from "react"
import { toast } from "react-toastify"


const PasswordForm = (params) => {
    const info = params.info
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [reNewPassword, setReNewPassword] = useState()


    const handleSaveChange = async () => {
        if (oldPassword && newPassword && reNewPassword) {
            if (newPassword === reNewPassword) {
                let res = await updatePassword({
                    oldPassword: oldPassword,
                    newPassword: newPassword
                })
                if (res && res.EC === 0) {
                    toast('Đổi mật khẩu thành công')
                    params.setIsEditUserInfo(false)
                }
                else if (res && res.EC === 3) {
                    toast.error('Mật khẩu cũ không đúng')
                }
                else {
                    toast.error('Lỗi server')
                }

            }
            else {
                toast.error('Mật khẩu không khớp')
            }
        }
        else {
            toast.error('Vui lòng nhập đầy đủ thông tin')
        }
    }
    return (
        <div>
            <ul >
                <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ fontSize: '18px', width: '280px' }}>Mật khẩu cũ</div>
                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </li>

                <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ fontSize: '18px', width: '280px' }}>Mật khẩu mới</div>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </li>
                <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ fontSize: '18px', width: '280px' }}>Nhập lại mật khẩu mới</div>
                    <input type="password" value={reNewPassword} onChange={(e) => setReNewPassword(e.target.value)} />
                </li>
            </ul>
            <button onClick={handleSaveChange} style={{ fontWeight: 'bold', fontSize: '18px', borderRadius: '10px' }}>Lưu</button>
        </div>
    )
}

export default PasswordForm