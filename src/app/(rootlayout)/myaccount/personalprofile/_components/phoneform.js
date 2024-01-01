'use client'

import { updateUser } from "@/services/userService"
import { useState } from "react"
import { toast } from "react-toastify"


const PhoneForm = (params) => {
    const info = params.info
    const [phoneNumber, setPhoneNumber] = useState(info.phoneNumber)



    const handleSaveChange = async () => {
        if (phoneNumber) {
            let res = await updateUser({
                phoneNumber: phoneNumber
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
                    <div style={{ fontSize: '18px', width: '120px' }}>Số điện thoại</div>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </li>

            </ul>
            <button onClick={handleSaveChange} style={{ fontWeight: 'bold', fontSize: '18px', borderRadius: '10px' }}>Lưu</button>
        </div>
    )
}

export default PhoneForm