'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAccount } from '@/services/userService'
import { loginRedux } from '@/redux/actions/loginAction'
import "./authcheck.scss"
import { usePathname } from 'next/navigation'

export const AuthCheck = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const router = useRouter()
    const info = useSelector((state) => state.personalInfo)

    const nonSecurePaths = ['/register', '/login']
    const path = usePathname();

    const fetchUser = async () => {
        let res = await getUserAccount()
        if (res && res.EC === 0 && res.DT) {
            let data = {
                isAuthenticated: true,
                token: res.DT.access_token,
                account: {
                    name: res.DT.name,
                    address: res.DT.address,
                    avatar: res.DT.avatar,
                    email: res.DT.email,
                    phoneNumber: res.DT.phoneNumber,
                    roles: res.DT.roles
                }
            }
            await dispatch(loginRedux(data))
            setLoading(false)
        }
        else {
            router.push('/login')
        }
    }



    useEffect(() => {
        console.log('path dang truy cap', path)

        if (nonSecurePaths.includes(path)) {
            setLoading(false)
        }
        else {
            fetchUser()
        }

    }, [])



    if (loading) {
        // Bạn có thể render một biểu tượng loading hoặc bất kỳ chỉ báo loading nào khác ở đây
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <div style={{ marginLeft: '10px' }}>ĐANG TẢI DỮ LIỆU...</div>
            </div>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}
