'use client'
import Slider from "react-slick";
import "./product.scss"
import { useEffect, useState } from "react";
import { addFavorite, getProductById, removeFavorite } from "@/services/productService";
import { useRouter } from "next/navigation";
import { getBidHistory, placeBid } from "@/services/bidService";
import { toast } from "react-toastify";
import io from 'socket.io-client';
import { getUserAccount } from "@/services/userService";
import { useDispatch, useSelector } from 'react-redux'

const socket = io('http://localhost:3333');

const Product = ({ params }) => {
    const router = useRouter()
    const [data, setData] = useState()
    const [images, setImages] = useState()
    const [endDate, setEndDate] = useState()
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(endDate));
    const [isFetchData, setIsFetchData] = useState(true)
    const [isSelectedTab, setIsSelectedTab] = useState('description')
    const [history, setHistory] = useState()
    const [ques, setQues] = useState(0)
    const [bidAmount, setBidAmount] = useState('')

    const [isFavorite, setIsFavorite] = useState(false)

    const info = useSelector((state) => state.personalInfo)

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };


    function getTimeRemaining(endDate) {
        const targetDate = new Date(endDate).getTime();
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }


    const fetchProductData = async () => {

        let res = await getProductById(params.id)



        if (res && res.EC === 0 && res.DT !== null) {

            setData(res.DT)
            setImages(JSON.parse(res.DT.images))
            setEndDate(res.DT.endTime)
            res.DT.Favorites.forEach((item) => {
                if (item.userId === info.id) {
                    setIsFavorite(true)
                }
            })
        }
        else {
            router.push('/product')
        }

    }

    const fetchBidHistory = async () => {
        let res = await getBidHistory(params.id)
        if (res && res.EC === 0) {
            setHistory(res.DT)
        }

    }



    useEffect(() => {



        if (isFetchData) {
            fetchProductData();
            fetchBidHistory();

            setIsFetchData(false);

        }

        // Đăng ký sự kiện 'bidPlaced' khi component mount
        // socket.on('bidPlaced', (data) => {
        //     console.log('New bid:', data);
        //     // Cập nhật giao diện người dùng với dữ liệu mới
        // });

        const intervalId = setInterval(() => {
            setTimeRemaining(getTimeRemaining(endDate));
        }, 1000);

        // Hủy đăng ký sự kiện và clear interval khi component unmount
        return () => {
            // socket.off('bidPlaced', handleBidPlaced);
            clearInterval(intervalId);
            // socket.disconnect();
        };
    }, [endDate, isFetchData]);

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Thêm số 0 đằng trước nếu ngày hoặc tháng chỉ có một chữ số
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }

    function formatTime(inputDate) {
        const date = new Date(inputDate);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const ampm = hours >= 12 ? "PM" : "AM";

        // Chuyển đổi sang định dạng 12 giờ
        const formattedHours = hours % 12 || 12;

        // Thêm số 0 đằng trước nếu chỉ có một chữ số
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    }

    function isValidBid(currentPrice, jumpPrice, desiredBid) {
        // Chuyển đổi chuỗi thành số
        const currentPriceFloat = parseFloat(currentPrice);
        const jumpPriceFloat = parseFloat(jumpPrice);
        const desiredBidFloat = parseFloat(desiredBid);

        // Kiểm tra xem desiredBid có phải là một số hợp lệ không
        if (isNaN(desiredBidFloat)) {
            return false;
        }

        // Kiểm tra xem desiredBid có đúng theo quy tắc không
        const validBidAmount = currentPriceFloat + jumpPriceFloat;
        if (desiredBidFloat < validBidAmount) {
            return false;
        }

        // Nếu hợp lệ, trả về true
        return true;
    }

    const onBidding = async () => {
        if (isValidBid(data.currentPrice, data.jumpPrice, bidAmount)) {

            let res = await placeBid(params.id, bidAmount)
            if (res && res.EC === 0) {

                toast('Đặt giá thành công')
                await fetchProductData()
                await socket.emit('placeBid', { bidAmount })
            }
            if (res && res.EC === -2) {
                toast.error('Đấu giá này đã kết thúc')
            }

        }
        else {
            toast.error(`Giá đặt của bạn không hợp lệ, giá tối thiểu phải bằng ${formatter.format(parseInt(data.currentPrice) + parseInt(data.jumpPrice))}`)
        }
    }

    const addToFavorite = async () => {
        if (!isFavorite) {
            let res = await addFavorite(params.id)
            if (res && res.EC === 0) {
                toast('Đã thêm vào mục yêu thích')
            }
        }
        else {
            let res = await removeFavorite(params.id)
            if (res && res.EC === 0) {
                toast('Đã bỏ khỏi mục yêu thích')
                setIsFavorite(false)
            }
        }

        await fetchProductData()

    }



    return (
        data ?
            <div>

                <section className="product-details padding-bottom mt--240 mt-lg--440">
                    <div className="container">
                        <div className="slider-wrapper">
                            <Slider {...settings}>
                                {images ?
                                    images.map((item) => {
                                        return (
                                            <div style={{ backgroundColor: 'none !important' }} className="slider-item">
                                                <a className="browse-item">
                                                    <img style={{ height: '420px' }} src={item}></img>

                                                </a>
                                            </div>
                                        )
                                    })
                                    : ''}

                            </Slider>
                        </div>
                        <div className="row mt-40-60-80">
                            <div className="col-lg-8">
                                <div className="product-details-content">
                                    <div className="product-details-header">
                                        <h2 className="title">{data.name}</h2>
                                        <ul>
                                            <li>ID sản phẩm: {data.id}</li>

                                        </ul>
                                    </div>
                                    <ul className="price-table mb-30">
                                        <li className="header">
                                            <h5 className="current">Giá hiện tại</h5>
                                            <h3 className="price"> {formatter.format(data.currentPrice)}</h3>
                                        </li>

                                        <li>
                                            <span className="details">Bước tăng (VNĐ)</span>
                                            <h5 className="info"> {formatter.format(data.jumpPrice)}</h5>
                                        </li>
                                    </ul>
                                    <div className="product-bid-area">
                                        <div className="product-bid-form">
                                            <div className="search-icon">
                                                <img src="https://pixner.net/sbidu/main/assets/images/product/search-icon.png" alt="product" />
                                            </div>
                                            <input value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} type="number" placeholder="Nhập giá muốn đấu giá" />
                                            <button onClick={onBidding} className="custom-button">Đặt giá</button>
                                        </div>
                                    </div>
                                    <div className="buy-now-area">
                                        <a onClick={addToFavorite} className="rating custom-button active border"><i style={{ marginRight: '4px' }} className="fas fa-star"></i>{!isFavorite ? 'Thêm vào danh sách yêu thích' : 'Hủy yêu thích'}</a>
                                        <div className="share-area">
                                            <span>Chia sẽ:</span>
                                            <ul style={{ marginTop: '20px' }}>
                                                <li>
                                                    <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#0"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#0"><i className="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="product-sidebar-area">
                                    <div className="product-single-sidebar mb-3">
                                        <h6 className="title">Đấu giá này sẽ kết thúc:</h6>
                                        <div className="countdown">
                                            <div id="bid_counter1">{timeRemaining.days}d  : {timeRemaining.hours}h  : {timeRemaining.minutes}m  : {timeRemaining.seconds}s</div>
                                        </div>
                                        <div className="side-counter-area">

                                            <div className="side-counter-item">
                                                <div className="thumb">
                                                    <img src="https://pixner.net/sbidu/main/assets/images/product/icon2.png" alt="product" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="count-title"><span className="counter">{data.User.name}</span></h3>
                                                    <p>Người bán</p>
                                                </div>
                                            </div>
                                            <div className="side-counter-item">
                                                <div className="thumb">
                                                    <img src="https://pixner.net/sbidu/main/assets/images/product/icon3.png" alt="product" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="count-title"><span className="counter">{data.Auctions.length > 0 ? data.Auctions[0].bidCount : 0}</span></h3>
                                                    <p>Tổng lượt đấu giá</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#0" className="cart-link">Xem chính sách giao hàng, thanh toán &amp; đấu giá</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-tab-menu-area mb-40-60 mt-70-100">
                        <div className="container">
                            <ul className="product-tab-menu nav nav-tabs">
                                <li>
                                    <a style={{ cursor: 'pointer' }} onClick={() => setIsSelectedTab('description')} className={isSelectedTab === 'description' ? "active" : ''} data-toggle="tab">
                                        <div className="thumb">
                                            <img src="https://pixner.net/sbidu/main/assets/images/product/tab1.png" alt="product" />
                                        </div>
                                        <div className="content">Mô tả</div>
                                    </a>
                                </li>

                                <li>
                                    <a style={{ cursor: 'pointer' }} onClick={() => setIsSelectedTab('history')} className={isSelectedTab === 'history' ? "active" : ''} data-toggle="tab">
                                        <div className="thumb">
                                            <img src="https://pixner.net/sbidu/main/assets/images/product/tab3.png" alt="product" />
                                        </div>
                                        <div className="content">Lịch sử đấu giá ({data.Auctions.length > 0 ? data.Auctions[0].bidCount : 0})</div>
                                    </a>
                                </li>
                                <li>
                                    <a style={{ cursor: 'pointer' }} onClick={() => setIsSelectedTab('question')} className={isSelectedTab === 'question' ? "active" : ''} data-toggle="tab">
                                        <div className="thumb">
                                            <img src="https://pixner.net/sbidu/main/assets/images/product/tab4.png" alt="product" />
                                        </div>
                                        <div className="content">Câu hỏi thường gặp </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div className={isSelectedTab === 'description' ? "tab-pane fade show active" : "tab-pane fade"} >
                                <div className="tab-details-content">
                                    <div dangerouslySetInnerHTML={{ __html: data.descriptionHTML }}></div>
                                </div>
                            </div>

                            <div className={isSelectedTab === 'history' ? "tab-pane fade show active" : "tab-pane fade"} >
                                <div className="history-wrapper">
                                    <div className="item">
                                        <h5 className="title">Lịch sử đấu giá</h5>
                                        <div className="history-table-area">
                                            <table className="history-table">
                                                <thead>
                                                    <tr>
                                                        <th style={{ textAlign: 'center' }}>Người đấu giá</th>
                                                        <th style={{ textAlign: 'center' }}>Ngày</th>
                                                        <th style={{ textAlign: 'center' }}>Giờ</th>
                                                        <th style={{ textAlign: 'center' }}>Giá đấu giá</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {history ?
                                                        history.map((item) => {
                                                            return (
                                                                <tr>
                                                                    <td data-history="bidder">
                                                                        <div className="user-info">
                                                                            <div className="content">
                                                                                {item.User.name}
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td data-history="date">{formatDate(item.createdAt)}</td>
                                                                    <td data-history="time">{formatTime(item.createdAt)}</td>
                                                                    <td style={{ textAlign: 'center' }} data-history="unit price">{formatter.format(item.bidAmount)}</td>
                                                                </tr>
                                                            )
                                                        })
                                                        : ''}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={isSelectedTab === 'question' ? "tab-pane fade show active" : "tab-pane fade"} >
                                <h5 className="faq-head-title">Các câu hỏi thường gặp</h5>
                                <div className="faq-wrapper">
                                    <div onClick={() => setQues(ques === 1 ? 0 : 1)} className={ques === 1 ? "faq-item open active" : "faq-item"}>
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Làm thế nào để bắt đầu đấu giá?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>Tất cả các nhà thầu thành công có thể xác nhận giá trúng thầu của họ bằng cách kiểm tra "Nineh Bidding". Ngoài ra, tất cả những người đấu giá thành công sẽ nhận được email thông báo về giá trúng thầu của họ sau khi cuộc đấu giá kết thúc.</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setQues(ques === 2 ? 0 : 2)} className={ques === 2 ? "faq-item open active" : "faq-item"}>
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Tiền đặt cọc / Quyền đấu giá </span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>Tất cả các nhà thầu thành công có thể xác nhận giá trúng thầu của họ bằng cách kiểm tra "Sbidu". Ngoài ra, tất cả những người đấu giá thành công sẽ nhận được email thông báo về giá trúng thầu của họ sau khi cuộc đấu giá kết thúc.</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setQues(ques === 3 ? 0 : 3)} className={ques === 3 ? "faq-item open active" : "faq-item"}>
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Thời gian giao hàng đến </span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>Tất cả các nhà thầu thành công có thể xác nhận giá trúng thầu của họ bằng cách kiểm tra "Sbidu". Ngoài ra, tất cả những người đấu giá thành công sẽ nhận được email thông báo về giá trúng thầu của họ sau khi cuộc đấu giá kết thúc.</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setQues(ques === 4 ? 0 : 4)} className={ques === 4 ? "faq-item open active" : "faq-item"}>
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Đăng ký tham gia đấu giá như thế nào?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>Tất cả các nhà thầu thành công có thể xác nhận giá trúng thầu của họ bằng cách kiểm tra "Sbidu". Ngoài ra, tất cả những người đấu giá thành công sẽ nhận được email thông báo về giá trúng thầu của họ sau khi cuộc đấu giá kết thúc.</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setQues(ques === 5 ? 0 : 5)} className={ques === 5 ? "faq-item open active" : "faq-item"}>
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Làm cách nào để biết giá đấu giá của tôi có thành công hay không?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>Tất cả các nhà thầu thành công có thể xác nhận giá trúng thầu của họ bằng cách kiểm tra "Sbidu". Ngoài ra, tất cả những người đấu giá thành công sẽ nhận được email thông báo về giá trúng thầu của họ sau khi cuộc đấu giá kết thúc.</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setQues(ques === 6 ? 0 : 6)} className={ques === 6 ? "faq-item open active" : "faq-item"}>
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Điều gì xảy ra nếu tôi trả giá sai?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>Tất cả các nhà thầu thành công có thể xác nhận giá trúng thầu của họ bằng cách kiểm tra "Sbidu". Ngoài ra, tất cả những người đấu giá thành công sẽ nhận được email thông báo về giá trúng thầu của họ sau khi cuộc đấu giá kết thúc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            : ''
    )
}

export default Product

