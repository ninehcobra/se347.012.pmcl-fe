'use client'
import './create.scss'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { createProduct } from '@/services/productService'

const Create = () => {

    const router = useRouter()

    const [title, setTitle] = useState('')

    const handleOnChange = (text) => {
        setTitle(text)
    }

    const onSubmit = async () => {
        if (title) {
            try {
                let res = await createProduct(title)
                if (res && res.EC === 0) {
                    router.push(`/seller/product/${res.DT.id}`)
                }
                else {
                    toast.error('Lỗi máy chủ')
                }
            } catch (error) {
                toast.error('Lỗi phát sinh khi tạo mới khóa học')
            }
        }
        else {
            toast.error('Vui lòng nhập tên khóa học')
        }
    }

    return (
        <div className="create-wrapper">
            <div className="create-content">
                <div className="create-title">
                    <div className="title">Đặt tên sản phẩm mà bạn muốn đấu giá</div>
                    <div className="description">Bạn muốn tên sản phẩm như thế nào? Đừng lo bạn có thể đổi nó lại lúc nào cũng được.</div>
                </div>

                <div className="create-input">
                    <div className="title">Tiêu đề sản phẩm</div>
                    <input onChange={(e) => handleOnChange(e.target.value)} value={title} placeholder="Ví dụ: Khóa giải tích 1"></input>
                    <div className="description">Bạn sẽ đấu giá sản phẩm gì?</div>
                </div>

                <div className="create-btn">
                    <div className="btn cancel">
                        <div>
                            Hủy
                        </div>
                    </div>
                    <div onClick={onSubmit} className="btn">
                        <div>
                            Tiếp tục
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Create