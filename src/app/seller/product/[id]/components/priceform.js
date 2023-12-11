'use client'

import { updateProduct } from "@/services/productService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const PriceForm = (params) => {

    let product = params.product
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()


    const handleSaveName = async () => {
        if (name) {
            product.name = name
            console.log(product)
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                setName('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền tiêu đề')
        }
    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Tiêu đề khóa học
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa tiêu đề</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Tiêu đề mới" />

                    {!isSubmit ? <button onClick={handleSaveName}>Lưu</button> : <button disabled>Đang lưu...</button>}

                </div> : <div>{product.name}</div>
            }

        </div>
    )
}

export default PriceForm