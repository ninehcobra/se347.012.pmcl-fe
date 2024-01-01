'use client'

import { updateUser } from "@/services/userService"
import { useState } from "react"
import { toast } from "react-toastify"


const UserInfoForm = (params) => {
    const info = params.info
    const [name, setName] = useState(info.name)
    const [address, setAddress] = useState(info.address)


    const handleSaveChange = async () => {
        if (name && address) {
            let res = await updateUser({
                name: name,
                address: address
            })
            if (res && res.EC === 0) {
                toast('Lưu thành công')
                params.setIsEditUserInfo(false)
            }
            else {
                toast('Lỗi server')
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
                    <div style={{ fontSize: '18px', width: '120px' }}>Tên</div>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </li>

                <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ fontSize: '18px', width: '120px' }}>Địa chỉ</div>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} />
                </li>
            </ul>
            <button onClick={handleSaveChange} style={{ fontWeight: 'bold', fontSize: '18px', borderRadius: '10px' }}>Lưu</button>
        </div>
    )
}

export default UserInfoForm