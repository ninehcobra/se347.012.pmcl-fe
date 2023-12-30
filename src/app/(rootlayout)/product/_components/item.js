const Item = () => {
    return (
        <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
                <div className="auction-thumb"></div>
                <div className="auction-content">
                    <h6 className="title">Xe 290123</h6>
                    <div className="bid-area">
                        <div className="bid-amount">
                            <div className="icon">
                                <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                                <div className="current">Current Bid</div>
                                <div className="amount">$876.00</div>
                            </div>
                        </div>
                        <div className="bid-amount">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>
                            <div className="amount-content">
                                <div className="current">Buy Now</div>
                                <div className="amount">$5,00.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="countdown-area">
                        <div className="countdown">
                            <div id="bid_counter1">0d  : 20h  : 46m  : 14s</div>
                        </div>
                        <span className="total-bids">30 Bids</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item