'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './product.scss'
import { getProductById } from '@/services/productService'
import NameForm from './components/nameform'

const Product = ({ params }) => {
    const [product, setProduct] = useState()
    const [completionText, setCompletionText] = useState('')

    const router = useRouter()

    const fetchProduct = async () => {

        let res = await getProductById(params.id);

        if (res && res.EC === 0) {
            setProduct(res.DT);
            changeCompletionText(res.DT)
        } else {
            return router.push('/seller/product');
        }

    }

    const changeCompletionText = (data) => {
        const requiredFields = [
            data.name,
            data.descriptionMarkdown,
            data.startPrice,
            data.jumpPrice,
            data.startTime,
            data.endTime,
            data.categoryId,
            data.images
        ];

        const totalFields = requiredFields.length;
        const completedFields = requiredFields.filter(Boolean).length;
        const completionText = `(${completedFields}/${totalFields})`;
        setCompletionText(completionText);
    }

    useEffect(() => {
        fetchProduct()

    }, [])




    return (
        product ?
            <div className="course-wrapper">
                <div className="left-content">
                    <div className="create-course-process">
                        <div className="title">Thiết lập sản phẩm đáu giá</div>
                        <div className="process">Tiến độ thiết lập {completionText}</div>
                    </div>

                    <div className="customize-wrapper">
                        <div className="customize-icon">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/customize.png"></img>
                        </div>
                        <div className="customize-title">
                            Tùy chỉnh sản phẩm của bạn
                        </div>
                    </div>


                    <NameForm product={product} changeCompletionText={changeCompletionText} />
                    <NameForm product={product} changeCompletionText={changeCompletionText} />

                </div>
                <div className="right-content">
                </div>
            </div>
            : ''
    )
}

export default Product