'use client'
import { getWonProducts, payProduct } from "@/services/productService"
import { useEffect, useState } from "react"
import { PayPalButton } from "react-paypal-button-v2"
import { toast } from "react-toastify"

const WinningBid = () => {

    const [products, setProducts] = useState(null)
    const [isPay, setIsPay] = useState(false)

    const fetchUserWonProducts = async () => {
        let res = await getWonProducts()
        if (res && res.EC === 0) {

            setProducts(res.DT)
        }
    }

    useEffect(() => {
        fetchUserWonProducts()
    }, [isPay])

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',

    });

    const convertCurrency = (amount) => {
        const fixedRate = 0.000043;
        const amountUSD = amount * fixedRate;
        return amountUSD.toString()
    };

    const handlePayProduct = async (id) => {
        let res = await payProduct(id)
        if (res && res.EC === 0) {
            await fetchUserWonProducts()
        }
    }

    return (
        <div>
            <div className="dash-bid-item dashboard-widget mb-40-60">
                <div className="header">
                    <h4 className="title">Đấu giá thắng</h4>
                </div>

            </div>
            <div className="row mb-30-none justify-content-center">

                {
                    products && products.length > 0 ?
                        products.map((item) => {
                            return (
                                <div className="col-sm-10 col-md-6">
                                    <div className="auction-item-2">
                                        <div className="auction-thumb">
                                            <a href="./product-details.html"><img src={JSON.parse(item.images)[0]} alt="car" /></a>
                                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                        </div>
                                        <div className="auction-content">
                                            <h6 className="title">
                                                <a href="#0">{item.name}</a>
                                            </h6>
                                            <div className="bid-area">
                                                <div style={{ width: '100%' }} className="bid-amount">
                                                    <div className="icon">
                                                        <i className="flaticon-auction"></i>
                                                    </div>
                                                    <div className="amount-content">
                                                        <div className="current">Giá chiến thắng</div>
                                                        <div className="amount">{formatter.format(item.currentPrice)}</div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div style={{ marginTop: '12px' }} className="text-center">
                                                {!item.isPay ?
                                                    <PayPalButton
                                                        amount={convertCurrency(parseInt(item.currentPrice))}
                                                        // Các prop khác của PayPalButton
                                                        onSuccess={(details, data) => {
                                                            // Xử lý khi thanh toán thành công
                                                            handlePayProduct(item.id)
                                                            toast('Thanh toán thành công');
                                                            setIsPay(!isPay)
                                                            // Gọi hàm để cập nhật trạng thái thanh toán trong database (đã thanh toán)
                                                            // updatePaymentStatus(item.id);
                                                        }}
                                                        onError={(error) => {
                                                            // Xử lý khi có lỗi trong quá trình thanh toán
                                                            toast.error('Có lỗi xảy ra trong quá trình thanh toán');
                                                        }}
                                                    />
                                                    : 'Đã thanh toán'}


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : ''
                }
            </div>
        </div>
    )
}

export default WinningBid

