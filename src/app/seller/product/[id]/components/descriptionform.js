'use client'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { updateProduct } from "@/services/productService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

const DescriptionForm = (params) => {
    let product = params.product
    let changeCompletionText = params.changeCompletionText

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [descriptionHTML, setDescriptionHTML] = useState('')
    const [descriptionMarkdown, setDescriptionMarkdown] = useState(product.descriptionMarkdown ? product.descriptionMarkdown : '')

    // Initialize a markdown parser
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    // Finish!
    function handleEditorChange({ html, text }) {
        setDescriptionHTML(html)
        setDescriptionMarkdown(text)
    }


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
            return data;
        }
    }

    const handleSaveName = async () => {
        if (descriptionHTML && descriptionMarkdown) {
            product.descriptionHTML = descriptionHTML
            product.descriptionMarkdown = descriptionMarkdown
            product.images = product.images && product.images.length > 0 ? convertToArray(product.images) : null
            console.log(product)
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền mô tả')
        }

    }

    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Mô tả sản phẩm
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        <i class="fa-solid fa-pencil"></i>
                        <div style={{ marginLeft: '12px' }}>Sửa mô tả</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => setIsEditing(false)} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>

            {isEditing ?
                <div className="title-form-wrapper">
                    <div>
                        <MdEditor value={descriptionMarkdown} style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
                    </div>

                    {!isSubmit ? <button className="btn-save" onClick={handleSaveName}>Lưu</button> : <button className="btn-save" disabled>Đang lưu...</button>}

                </div> : product.descriptionHTML && product.descriptionMarkdown ?
                    <div style={{ width: '100 %', backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '15px' }}>
                        <div dangerouslySetInnerHTML={{ __html: product.descriptionHTML }}></div>
                    </div>

                    : 'Chưa có mô tả'
            }

        </div>


    )
}

export default DescriptionForm