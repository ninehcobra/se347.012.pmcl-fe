'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './product.scss'
import { getProductById } from '@/services/productService'
import NameForm from './components/nameform'
import PriceForm from './components/priceform'
import TimeForm from './components/timeform'
import CategoryForm from './components/categoryform'
import ThumbnailForm from './components/thumbnailform'
import DescriptionForm from './components/descriptionform'

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
            <div>
                <div className="create-course-process">
                    <div className="title">Thiết lập sản phẩm đáu giá</div>
                    <div className="process">Tiến độ thiết lập {completionText}</div>
                </div>
                <div className="course-wrapper">
                    <div className="left-content">


                        <div className="customize-wrapper">
                            <div className="customize-icon">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/customize.png"></img>
                            </div>
                            <div className="customize-title">
                                Tùy chỉnh thông tin sản phẩm của bạn
                            </div>
                        </div>


                        <NameForm product={product} changeCompletionText={changeCompletionText} />
                        <PriceForm product={product} changeCompletionText={changeCompletionText} />
                        <TimeForm product={product} changeCompletionText={changeCompletionText} />
                        <CategoryForm product={product} changeCompletionText={changeCompletionText} />

                    </div>
                    <div className="right-content">
                        <div className="customize-wrapper">
                            <div className="customize-icon">
                                <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/image.png"></img>
                            </div>
                            <div className="customize-title">
                                Tùy chỉnh ảnh sản phẩm của bạn
                            </div>
                        </div>

                        <ThumbnailForm product={product} changeCompletionText={changeCompletionText} />
                    </div>
                </div>

                <div style={{ padding: '15px' }} >
                    <div style={{ marginBottom: '15px' }} className="customize-wrapper">
                        <div className="customize-icon">
                            <img src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/description.png"></img>
                        </div>
                        <div className="customize-title">
                            Tùy mô tả sản phẩm của bạn
                        </div>
                    </div>
                    <DescriptionForm product={product} changeCompletionText={changeCompletionText} />
                </div>
            </div>

            : ''
    )
}

export default Product