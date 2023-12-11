'use client'

import { updateProduct } from "@/services/productService"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeForm = (params) => {

    let product = params.product
    let changeCompletionText = params.changeCompletionText

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        start.setHours(12, 0, 0, 0);
        end && end.setHours(12, 0, 0, 0);
        setStartDate(start);
        setEndDate(end);
    };

    const [isEditing, setIsEditing] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    const router = useRouter()


    const handleSaveName = async () => {
        if (startDate && endDate) {
            product.startTime = startDate
            product.endTime = endDate
            product.images = null
            console.log(product)
            let res = await updateProduct(product)
            if (res && res.EC === 0) {
                changeCompletionText(product)
                toast('Lưu thành công')
                setStartDate(new Date())
                setEndDate()
                setIsEditing(false)
                setIsSubmit(false)
                router.refresh()
            }
        }
        else {
            toast.warning('Vui lòng điền tiêu đề')
        }
    }
    function addMonths(date, months) {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + months);
        return newDate;
    }

    function formatDateTime(dateString) {
        const date = new Date(dateString)
        const day = date.getDate();
        const month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript là từ 0 đến 11
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Đảm bảo rằng ngày và tháng đều có hai chữ số
        const formattedDay = (day < 10) ? `0${day}` : day;
        const formattedMonth = (month < 10) ? `0${month}` : month;

        // Định dạng giờ và phút thành chuỗi có hai chữ số
        const formattedHours = (hours < 10) ? `0${hours}` : hours;
        const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;

        return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;
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
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        minDate={new Date()}
                        maxDate={addMonths(new Date(), 5)}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        showDisabledMonthNavigation
                    />

                    {!isSubmit ? <button className="btn-save" onClick={handleSaveName}>Lưu</button> : <button className="btn-save" disabled>Đang lưu...</button>}

                </div> : product.startTime && product.endTime ?
                    <div>
                        <div><strong>Ngày bắt đầu:</strong> {formatDateTime(product.startTime)} </div>
                        <div><strong>Ngày kết thúc:</strong> {formatDateTime(product.endTime)} </div>
                    </div>
                    : <div style={{ fontStyle: 'italic', fontSize: '14px' }}>Chưa đặt thời gian</div>
            }

        </div>
    )
}

export default TimeForm