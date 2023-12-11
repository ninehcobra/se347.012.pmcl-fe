'use client'

import { updateProduct } from "@/services/productService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const NameForm = (params) => {

    let product = params.product
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()
    function convertToArray(data) {
        try {
            const dataArray = JSON.parse(data);

            // Kiểm tra xem có phải là mảng không
            if (Array.isArray(dataArray)) {
                return dataArray;
            } else {
                // Nếu không phải mảng, trả về một mảng chứa giá trị đơn
                return [dataArray];
            }
        } catch (error) {
            console.error('Error converting to array:', error);
            return [];
        }
    }

    const handleSaveName = async () => {
        if (name) {
            product.name = name
            product.images = convertToArray(product.images)
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
                    Tên sản phẩm đấu giá
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa tên</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Tên mới" />

                    {!isSubmit ? <button className="btn-save" onClick={handleSaveName}>Lưu</button> : <button className="btn-save" disabled>Đang lưu...</button>}

                </div> : <div>{product.name}</div>
            }

        </div>
    )
}

export default NameForm