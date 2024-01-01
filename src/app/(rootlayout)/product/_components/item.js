import CountDown from "@/app/seller/components/countdown";
import Link from "next/link";
import { useState, useEffect } from "react";

const Item = (params) => {
    const [isAuctionStarted, setIsAuctionStarted] = useState(false);

    useEffect(() => {
        // Kiểm tra nếu startTime đã đến
        if (params.product.startTime && new Date(params.product.startTime).getTime() <= new Date().getTime()) {
            setIsAuctionStarted(true);
        }
    }, [params.product.startTime]);

    let product = params.product;
    let images = JSON.parse(product.images);

    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div className="col-sm-10 col-md-6 col-lg-4">
            {isAuctionStarted ? (
                <Link href={`/product/${product.id}`} className="auction-item-2">
                    <div className="auction-thumb">
                        <a>
                            <img src={images && images.length > 0 ? images[0] : ""} />
                        </a>
                    </div>
                    <div className="auction-content">
                        <h6 className="title">{product.name}</h6>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div style={{ width: "100%" }}>
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Giá hiện tại</div>
                                        <div className="amount">{formatter.format(product.currentPrice)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div style={{ width: "100%" }}>
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Bước nhảy</div>
                                        <div className="amount">{formatter.format(product.jumpPrice)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter1">
                                    <CountDown startDate={product.startTime} endDate={product.endTime} />
                                </div>
                            </div>
                            <span className="total-bids">30 Lượt đấu giá</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="auction-item-2" style={{ pointerEvents: "none" }}>
                    <div className="auction-thumb">
                        <a>
                            <img src={images && images.length > 0 ? images[0] : ""} />
                        </a>
                    </div>
                    <div className="auction-content">
                        <h6 className="title">{product.name}</h6>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div style={{ width: "100%" }}>
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Giá hiện tại</div>
                                        <div className="amount">{formatter.format(product.currentPrice)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div style={{ width: "100%" }}>
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Bước nhảy</div>
                                        <div className="amount">{formatter.format(product.jumpPrice)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter1">
                                    <CountDown startDate={product.startTime} endDate={product.endTime} />
                                </div>
                            </div>
                            <span className="total-bids">30 Lượt đấu giá</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Item;
