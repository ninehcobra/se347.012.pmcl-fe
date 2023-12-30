'use client'

import { updateProduct } from "@/services/productService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"


const PriceForm = (params) => {

    let product = params.product
    let changeCompletionText = params.changeCompletionText


    const [isEditing, setIsEditing] = useState(false)
    const [price, setPrice] = useState('')
    const [jumpPrice, setJumpPrice] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()

    const validation = () => {
        return !isNaN(price) && !isNaN(jumpPrice)
    }
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
            return data;
        }
    }
    const handleSaveName = async () => {
        let check = validation()
        if (price && jumpPrice && check) {
            product.startPrice = price
            product.currentPrice = price
            product.jumpPrice = jumpPrice

            product.images = product.images && product.images.length > 0 ? convertToArray(product.images) : null
            console.log(product)
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                setPrice('')
                setJumpPrice('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
                params.setRefesh(!params.refresh)
            }
        }
        else {
            toast.warning('Vui lòng điền giá muốn đấu giá hợp lệ')
        }
    }

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Giá khởi điểm
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa giá</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <input onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Giá khởi điểm" />
                    <input onChange={(e) => setJumpPrice(e.target.value)} value={jumpPrice} placeholder="Bước nhập" />

                    {!isSubmit ? <button className="btn-save" onClick={handleSaveName}>Lưu</button> : <button className="btn-save" disabled>Đang lưu...</button>}

                </div> : product.startPrice && product.jumpPrice ?
                    <div>
                        <div><strong>Giá khởi điểm:</strong> {formatNumber(product.startPrice)} VNĐ</div>
                        <div><strong>Bước nhảy:</strong> {formatNumber(product.jumpPrice)} VNĐ</div>
                    </div>
                    : <div style={{ fontStyle: 'italic', fontSize: '14px' }}>Chưa đặt giá</div>
            }

        </div>
    )
}

export default PriceForm