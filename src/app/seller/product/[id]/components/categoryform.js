'use client'

import { updateProduct } from "@/services/productService"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { getCategory } from "@/services/productService"


const CategoryForm = (params) => {

    let product = params.product
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [category, setCategory] = useState()
    const [categoryId, setCateGoryId] = useState()
    const [name, setName] = useState(null)

    const router = useRouter()

    const fetchCategory = async () => {
        let res = await getCategory()
        console.log(res)
        if (res && res.DT) {
            setCategory(res.DT)
        }

    }

    useEffect(() => {
        fetchCategory()
    }, [])


    const handleSaveName = async () => {
        if (categoryId) {
            product.categoryId = categoryId
            product.images = null
            console.log(product)
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                setCateGoryId('')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền tiêu đề')
        }
    }

    const onChangeCategoryId = (id) => {
        setCateGoryId(id)
    }

    const categoryName = (id) => {
        if (category) {
            for (let i = 0; i < category.length; i++) {
                if (category[i].id === id) {
                    return category[i].name
                }
            }
        }
        return 'hi'
    }


    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Danh mục
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
                    <select onChange={(e) => onChangeCategoryId(e.target.value)}>
                        <option key={-1} value={null}>----Chọn danh mục----</option>
                        {category ? category.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        }) : 'ha'}
                    </select>


                    {!isSubmit ? <button className="btn-save" onClick={handleSaveName}>Lưu</button> : <button className="btn-save" disabled>Đang lưu...</button>}

                </div> : <div>{product.categoryId ? categoryName(product.categoryId) : 'Chưa chọn danh mục'}</div>
            }

        </div>
    )
}

export default CategoryForm