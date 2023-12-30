'use client'

import { updateProduct } from "@/services/productService"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useRef, useCallback, useEffect } from "react"
import { toast } from "react-toastify"
import { useDropzone } from 'react-dropzone'
import axios from 'axios';
import Slider from "react-slick";

const ThumbnailForm = (params) => {

    let product = params.product
    let changeCompletionText = params.changeCompletionText

    const [arrImages, setArrImages] = useState('')


    const [images, setImages] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles) {
            setImages(acceptedFiles)
        }


    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const uploadImages = async (files) => {
        const uploadPromises = files.map(async (file) => {
            if (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
                const imageFormData = new FormData();
                imageFormData.append("file", file);
                imageFormData.append("cloud_name", "dwpz7w8y4");
                imageFormData.append("upload_preset", "bleu4scs");

                const response = await axios.post("https://api.cloudinary.com/v1_1/dwpz7w8y4/image/upload", imageFormData);

                return response.data.secure_url;
            }
        });

        try {
            const imageUrls = await Promise.all(uploadPromises);
            return imageUrls.filter((url) => url); // Remove potential undefined values
        } catch (error) {
            console.error("Error uploading images:", error);
            throw error; // Rethrow the error
        }
    };


    const handleSaveImage = async () => {
        setIsSubmit(true)
        if (images) {
            let linkThumnails = await uploadImages(images)
            product.images = linkThumnails
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                setImages(null)
                setIsEditing(false)
                setIsSubmit(false)
                setArrImages(linkThumnails)
                router.refresh()
                params.setRefesh(!params.refresh)
            }
        }
        else {
            toast.warning('Vui lòng chọn ảnh')
        }
    }

    useEffect(() => { setArrImages(JSON.parse(product.images)) }, [])


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className="title-form">
            <div className="title-form-label">
                <div >
                    Ảnh sản phẩm
                </div>
                {!isEditing
                    ?
                    <div className="edit-btn" onClick={() => setIsEditing(true)} style={{ display: 'flex', alignItems: 'center' }}>
                        {product.images ? <i class="fa-solid fa-pencil"></i> : <i class="fa-solid fa-circle-plus"></i>}
                        <div onClick={() => { setIsEditing(true) }} style={{ marginLeft: '12px' }}>{!product.images ? 'Thêm ảnh' : 'Sửa ảnh'}</div>
                    </div>
                    :

                    <div className="edit-btn" onClick={() => { setIsEditing(false) }} style={{ display: 'flex', alignItems: 'center' }}>

                        <div style={{ marginLeft: '12px' }}>Hủy</div>
                    </div>
                }
            </div>
            <div className="title-form-wrapper">

                {isEditing ?

                    <div>
                        {images
                            ?
                            <div style={{ padding: '10px' }}>
                                <Slider {...settings}>
                                    {images ? images.map((image) => {
                                        return (
                                            <img src={URL.createObjectURL(image)} style={{ width: '100%' }}></img>
                                        )
                                    }
                                    ) : ''}
                                </Slider>



                            </div>
                            :
                            <div className='drag_wrapper' {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <div style={{ height: '250px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#C0C5CD', borderRadius: '15px' }} >
                                            <p style={{ fontStyle: 'italic' }}>Kéo và thả ảnh tại đây...</p>
                                        </div> :
                                        <div style={{ height: '250px', width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#C0C5CD', borderRadius: '15px' }}>
                                            <p style={{ fontWeight: 'bold' }}>Bạn có thể nhấn vào để chọn file ảnh hoặc kéo thả vào đây.</p>
                                        </div>
                                }
                            </div>
                        }
                        {!isSubmit ? <button className="btn-save" style={{ marginTop: '12px' }} onClick={handleSaveImage}>Lưu</button> : <button className="btn-save" style={{ marginTop: '12px', width: '120px' }} disabled>Đang lưu...</button>}
                    </div>



                    : arrImages ?
                        <div style={{ padding: '10px' }}>
                            <Slider {...settings}>
                                {
                                    arrImages ? arrImages.map(
                                        (item) => {
                                            return (
                                                <img style={{ marginTop: '12px' }} src={item} />
                                            )
                                        }

                                    ) : ''
                                }
                            </Slider>
                        </div>

                        :
                        <div style={{ width: '100 %', height: '350px', backgroundColor: '#C0C5CD', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img style={{ height: '80px', width: '80px' }} src="https://raw.githubusercontent.com/ninehcobra/free-host-image/main/none-img.png" />
                        </div>
                }
            </div>
        </div>
    )
}

export default ThumbnailForm