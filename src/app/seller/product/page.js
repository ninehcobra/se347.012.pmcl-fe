'use client'
import { useRouter } from "next/navigation"
const Product = () => {
    const router = useRouter()
    return (
        <button onClick={() => { router.push('/seller/create') }}>Tạo sản phẩm</button>
    )
}

export default Product