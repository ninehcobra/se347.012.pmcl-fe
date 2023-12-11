'use client'
import Slider from "react-slick";
import "./product.scss"
import { useEffect, useState } from "react";
import { getProductById } from "@/services/productService";
import { useRouter } from "next/navigation";

const Product = ({ params }) => {
    const router = useRouter()
    const [data, setData] = useState()
    const [images, setImages] = useState()
    const [endDate, setEndDate] = useState()
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(endDate));

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
        }

    }

    useEffect(() => {
        fetchProductData()
        const intervalId = setInterval(() => {
            setTimeRemaining(getTimeRemaining(endDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [endDate])

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    return (
        data ?
            <div>
                <div className="hero-section style-2">
                    <div className="container">
                        <ul className="breadcrumb">

                        </ul>
                    </div>
                    <div className="bg_img hero-bg bottom_center" data-background="https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png" style={{ backgroundImage: 'url("https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png")' }}></div>
                </div>
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
                                            <h3 className="price">VNĐ {formatNumber(data.currentPrice)}</h3>
                                        </li>

                                        <li>
                                            <span className="details">Bước tăng (VNĐ)</span>
                                            <h5 className="info">VNĐ {formatNumber(data.jumpPrice)}</h5>
                                        </li>
                                    </ul>
                                    <div className="product-bid-area">
                                        <form className="product-bid-form">
                                            <div className="search-icon">
                                                <img src="https://pixner.net/sbidu/main/assets/images/product/search-icon.png" alt="product" />
                                            </div>
                                            <input type="text" placeholder="Nhập giá muốn đấu giá" />
                                            <button type="submit" className="custom-button">Đặt giá</button>
                                        </form>
                                    </div>
                                    <div className="buy-now-area">
                                        <a href="#0" className="rating custom-button active border"><i className="fas fa-star"></i>Thêm vào danh sách yêu thích</a>
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
                                                    <img src="https://pixner.net/sbidu/main/assets/images/product/icon1.png" alt="product" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="count-title"><span className="counter">61</span></h3>
                                                    <p>Người đấu giá đang hoạt động</p>
                                                </div>
                                            </div>
                                            <div className="side-counter-item">
                                                <div className="thumb">
                                                    <img src="https://pixner.net/sbidu/main/assets/images/product/icon2.png" alt="product" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="count-title"><span className="counter">203</span></h3>
                                                    <p>Đang theo dõi</p>
                                                </div>
                                            </div>
                                            <div className="side-counter-item">
                                                <div className="thumb">
                                                    <img src="https://pixner.net/sbidu/main/assets/images/product/icon3.png" alt="product" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="count-title"><span className="counter">82</span></h3>
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
                                    <a href="#details" className="active" data-toggle="tab">
                                        <div className="thumb">
                                            <img src="https://pixner.net/sbidu/main/assets/images/product/tab1.png" alt="product" />
                                        </div>
                                        <div className="content">Mô tả</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#delevery" data-toggle="tab">
                                        <div className="thumb">
                                            <img src="https://pixner.net/sbidu/main/assets/images/product/tab2.png" alt="product" />
                                        </div>
                                        <div className="content">Phương thức giao hàng</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#history" data-toggle="tab">
                                        <div className="thumb">
                                            <img src="https://pixner.net/sbidu/main/assets/images/product/tab3.png" alt="product" />
                                        </div>
                                        <div className="content">Lịch sử đấu giá (36)</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#questions" data-toggle="tab">
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
                            <div className="tab-pane fade show active" id="details">
                                <div className="tab-details-content">
                                    <div dangerouslySetInnerHTML={{ __html: data.descriptionHTML }}></div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="delevery">
                                <div className="shipping-wrapper">
                                    <div className="item">
                                        <h5 className="title">shipping</h5>
                                        <div className="table-wrapper">
                                            <table className="shipping-table">
                                                <thead>
                                                    <tr>
                                                        <th>Available delivery methods </th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Customer Pick-up (within 10 days)</td>
                                                        <td>$0.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Standard Shipping (5-7 business days)</td>
                                                        <td>Not Applicable</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Expedited Shipping (2-4 business days)</td>
                                                        <td>Not Applicable</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h5 className="title">Notes</h5>
                                        <p>Please carefully review our shipping and returns policy before committing to a bid.
                                            From time to time, and at its sole discretion, Sbidu may change the prevailing fee structure for shipping and handling.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="history">
                                <div className="history-wrapper">
                                    <div className="item">
                                        <h5 className="title">Bid History</h5>
                                        <div className="history-table-area">
                                            <table className="history-table">
                                                <thead>
                                                    <tr>
                                                        <th>Bidder</th>
                                                        <th>date</th>
                                                        <th>time</th>
                                                        <th>unit price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-history="bidder">
                                                            <div className="user-info">
                                                                <div className="thumb">
                                                                    <img src="https://pixner.net/sbidu/main/assets/images/history/01.png" alt="history" />
                                                                </div>
                                                                <div className="content">
                                                                    Moses Watts
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-history="date">06/16/2021</td>
                                                        <td data-history="time">02:45:25 PM</td>
                                                        <td data-history="unit price">$900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-history="bidder">
                                                            <div className="user-info">
                                                                <div className="thumb">
                                                                    <img src="https://pixner.net/sbidu/main/assets/images/history/02.png" alt="history" />
                                                                </div>
                                                                <div className="content">
                                                                    Pat Powell
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-history="date">06/16/2021</td>
                                                        <td data-history="time">02:45:25 PM</td>
                                                        <td data-history="unit price">$900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-history="bidder">
                                                            <div className="user-info">
                                                                <div className="thumb">
                                                                    <img src="https://pixner.net/sbidu/main/assets/images/history/03.png" alt="history" />
                                                                </div>
                                                                <div className="content">
                                                                    Jack Rodgers
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-history="date">06/16/2021</td>
                                                        <td data-history="time">02:45:25 PM</td>
                                                        <td data-history="unit price">$900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-history="bidder">
                                                            <div className="user-info">
                                                                <div className="thumb">
                                                                    <img src="https://pixner.net/sbidu/main/assets/images/history/04.png" alt="history" />
                                                                </div>
                                                                <div className="content">
                                                                    Arlene Paul
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-history="date">06/16/2021</td>
                                                        <td data-history="time">02:45:25 PM</td>
                                                        <td data-history="unit price">$900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-history="bidder">
                                                            <div className="user-info">
                                                                <div className="thumb">
                                                                    <img src="https://pixner.net/sbidu/main/assets/images/history/05.png" alt="history" />
                                                                </div>
                                                                <div className="content">
                                                                    Marcia Clarke
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-history="date">06/16/2021</td>
                                                        <td data-history="time">02:45:25 PM</td>
                                                        <td data-history="unit price">$900.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="text-center mb-3 mt-4">
                                                <a href="#0" className="button-3">Load More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="questions">
                                <h5 className="faq-head-title">Frequently Asked Questions</h5>
                                <div className="faq-wrapper">
                                    <div className="faq-item">
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">How to start bidding?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Security Deposit / Bidding Power </span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">Delivery time to the destination port </span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">How to register to bid in an auction?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item open active">
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">How will I know if my bid was successful?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                        </div>
                                    </div>
                                    <div className="faq-item">
                                        <div className="faq-title">
                                            <img src="https://pixner.net/sbidu/main/assets/css/img/faq.png" alt="css" /><span className="title">What happens if I bid on the wrong lot?</span><span className="right-icon"></span>
                                        </div>
                                        <div className="faq-content">
                                            <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
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

