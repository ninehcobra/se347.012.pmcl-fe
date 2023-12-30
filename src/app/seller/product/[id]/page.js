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
import { updateProduct } from "@/services/productService"
import { toast } from 'react-toastify'

const Product = ({ params }) => {
    const [product, setProduct] = useState()
    const [completionText, setCompletionText] = useState('')
    const [isComplete, setIsComplete] = useState(false)
    const [refresh, setRefesh] = useState(false)

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
        const isComplete = requiredFields.every(Boolean)

        setIsComplete(isComplete)
        setCompletionText(completionText);
    }

    useEffect(() => {
        fetchProduct()

    }, [refresh])

    const onChangeIsPublished = async () => {

        if (product && isComplete) {
            product.isPublished = !product.isPublished
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                router.refresh()
            }
            else {
                toast.error('Cập nhật thất bại')
            }
        }
        else {
            toast.error('Vui lòng cập nhật đầy đủ thông tin cần thiết.')
        }
    }



    return (
        product ?
            <>
                {
                    product.isPublished
                        ?
                        ''
                        :
                        <div style={{ width: '100%', height: '60px', backgroundColor: '#FCF098', padding: '0 20px', display: 'flex', alignItems: 'center', color: 'black' }}>
                            <div>
                                <img style={{ width: '40px', height: '40px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/warning.png"></img>
                            </div>
                            <div style={{ marginLeft: '20px', fontWeight: '500' }}>

                                Sản phẩm này chưa được đăng bán. Vui lòng cập nhật đầy đủ thông tin.
                            </div>
                        </div>
                }
                <div style={{ padding: '0 40px 0 20px' }}>

                    <div className="create-course-process" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div className="title">Thiết lập sản phẩm đấu giá</div>
                            <div className="process">Tiến độ thiết lập {completionText}</div>
                        </div>

                        <div onClick={onChangeIsPublished} style={{ display: 'flex', marginRight: '40px' }}>
                            <div

                                className="btn-control" style={{
                                    color: 'black', fontWeight: 'bold', padding: '4px', border: '1px solid #80808033', borderRadius: '5px', fontSize: '13px', height: '35px',
                                    display: 'flex', alignItems: 'center', marginRight: '8px'
                                }}>
                                <div>{product && product.isPublished ? "Ẩn sản phẩm" : "Công khai"}</div>
                            </div>
                            <div className="btn-control" style={{
                                color: 'black', fontWeight: 'bold', padding: '8px', backgroundColor: 'black', borderRadius: '5px', fontSize: '13px', height: '35px'
                                ,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <img style={{ height: '20px', width: '20px', marginLeft: '4px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/delete.png"></img>
                            </div>
                        </div>
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


                            <NameForm product={product} changeCompletionText={changeCompletionText} setRefesh={setRefesh} refresh={refresh} />
                            <PriceForm product={product} changeCompletionText={changeCompletionText} setRefesh={setRefesh} refresh={refresh} />
                            <TimeForm product={product} changeCompletionText={changeCompletionText} setRefesh={setRefesh} refresh={refresh} />
                            <CategoryForm product={product} changeCompletionText={changeCompletionText} setRefesh={setRefesh} refresh={refresh} />

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

                            <ThumbnailForm product={product} changeCompletionText={changeCompletionText} setRefesh={setRefesh} refresh={refresh} />
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
            </>
            : ''
    )
}

export default Product