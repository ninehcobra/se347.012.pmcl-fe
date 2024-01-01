'use client'

import { getUserActiveBiddingHistory, getUserAuctionStats, getUserFinishedBiddingHistory } from "@/services/bidService"
import { getWonProducts } from "@/services/productService"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"

const Dashboard = () => {

    const [auctionStats, setAuctionStats] = useState(0)
    const [limit, setLimit] = useState(5)
    const [currentPage1, setCurrentPage1] = useState(1)
    const [currentPage2, setCurrentPage2] = useState(1)
    const [activeBiddingHistory, setActiveBiddingHistory] = useState(null)
    const [finishedBiddingHistory, setFinishedBiddingHistory] = useState(null)
    const [totalPage1, setTotalPage1] = useState(0)
    const [totalPage2, setTotalPage2] = useState(0)
    const [refesh, setRefesh] = useState(false)
    const [winCount, setWinCount] = useState(0)

    const [content, setContent] = useState('current')


    const fetchUserAuctionStats = async () => {
        let res = await getUserAuctionStats()
        let res1 = await getWonProducts()
        if (res1 && res1.EC === 0) {
            setWinCount(res1.DT.length)
        }
        if (res && res.EC === 0) {
            setAuctionStats(res.DT)
            setRefesh(true)
        }
    }


    const fetchUserFinishedBiddingHistory = async () => {

        let res = await getUserFinishedBiddingHistory({ limit: limit, page: currentPage2 })
        if (res && res.EC === 0) {
            setFinishedBiddingHistory(res.DT.bids)
            setTotalPage2(res.DT.totalPages)
        }
    }

    const fetchUserActiveBiddingHistory = async () => {
        let res = await getUserActiveBiddingHistory({ limit: limit, page: currentPage1 })

        if (res && res.EC === 0) {
            setActiveBiddingHistory(res.DT.bids)
            setTotalPage1(res.DT.totalPages)
        }
    }


    useEffect(() => {
        if (!refesh) {
            fetchUserAuctionStats()
        }
        fetchUserFinishedBiddingHistory()
        fetchUserActiveBiddingHistory()
    }, [currentPage1, currentPage2])

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
    const handlePageClick1 = (event) => {
        setCurrentPage1(event.selected + 1)
    }
    const handlePageClick2 = (event) => {
        setCurrentPage2(event.selected + 1)
    }

    return (
        <div>
            <div className="dashboard-widget mb-40">
                <div className="dashboard-title mb-30">
                    <h5 className="title">Hoạt động của tôi</h5>
                </div>
                <div className="row justify-content-center mb-30-none">
                    <div className="col-md-4 col-sm-6">
                        <div className="dashboard-item">
                            <div className="thumb">
                                <img src="https://pixner.net/sbidu/main/assets/images/dashboard/01.png" alt="dashboard" />
                            </div>
                            <div className="content">
                                <h2 className="title"><span className="counter">{auctionStats}</span></h2>
                                <h6 className="info">Đang tham gia</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="dashboard-item">
                            <div className="thumb">
                                <img src="https://pixner.net/sbidu/main/assets/images/dashboard/02.png" alt="dashboard" />
                            </div>
                            <div className="content">
                                <h2 className="title"><span className="counter">{winCount}</span></h2>
                                <h6 className="info">Thắng</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="dashboard-item">
                            <div className="thumb">
                                <img src="https://pixner.net/sbidu/main/assets/images/dashboard/03.png" alt="dashboard" />
                            </div>
                            <div className="content">
                                <h2 className="title"><span className="counter">115</span></h2>
                                <h6 className="info">Yêu thích</h6>
                                <div id="extwaiokist" style={{ display: 'none' }} v="nipgg" q="2a2a9de0" c="8.299" i="18" u="17.22" s="11202301" sg="svr_09102316-ga_11202301-bai_11222322" d="1" w="false" e="" a="3" m="BMe=" vn="9adfy"><div id="extwaigglbit" style={{ display: 'none' }} v="nipgg" q="2a2a9de0" c="8.299" i="18" u="17.22" s="11202301" sg="svr_09102316-ga_11202301-bai_11222322" d="1" w="false" e="" a="3" m="BMe="></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-widget">
                <h5 className="title mb-10">Đấu giá</h5>
                <div className="dashboard-purchasing-tabs">
                    <ul className="nav-tabs nav">
                        <li>
                            <a href="#current" onClick={() => setContent('current')} className={content === 'current' ? "active" : ''} data-toggle="tab">Hiện tại</a>
                        </li>
                        <li>
                            <a href="#history" onClick={() => setContent('history')} className={content === 'history' ? "active" : ''} data-toggle="tab">Lịch sử</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={content === 'current' ? "tab-pane show" : 'tab-pane'} id="current">
                            <table className="purchasing-table">
                                <thead>
                                    <tr><th>Sản phẩm</th>
                                        <th>Giá đặt</th>
                                        <th>Thời gian</th>
                                    </tr></thead>
                                <tbody>
                                    {
                                        activeBiddingHistory && activeBiddingHistory.length > 0 ?
                                            activeBiddingHistory.map((item) => {
                                                if (item.Auction) {
                                                    return (
                                                        <tr>
                                                            <td style={{ paddingLeft: '8px' }} data-purchase="item">{item.Auction.Product.name}</td>
                                                            <td style={{ paddingLeft: '8px' }} data-purchase="bid price">{formatter.format(item.bidAmount)}</td>
                                                            <td style={{ paddingLeft: '8px' }} data-purchase="highest bid">{formatDate(item.bidTime)}</td>
                                                        </tr>
                                                    )
                                                }
                                            })
                                            : ''
                                    }


                                </tbody>
                            </table>
                            <ReactPaginate
                                pageCount={totalPage1}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={1}
                                previousLabel={<div>{"<"}</div>}
                                nextLabel={<div>{">"}</div>}
                                containerClassName="pagination"
                                activeClassName="active"
                                onPageChange={handlePageClick1}
                            />
                        </div>
                        <div className={content === 'history' ? "tab-pane show" : 'tab-pane'} id="pending">
                            <table className="purchasing-table">
                                <thead>
                                    <tr><th>Sản phẩm</th>
                                        <th>Giá đặt</th>
                                        <th>Thời gian</th>
                                    </tr></thead>
                                <tbody>
                                    {
                                        finishedBiddingHistory && finishedBiddingHistory.length > 0 ?
                                            finishedBiddingHistory.map((item) => {
                                                if (item.Auction) {
                                                    return (
                                                        <tr>
                                                            <td style={{ paddingLeft: '8px' }} data-purchase="item">{item.Auction.Product.name}</td>
                                                            <td style={{ paddingLeft: '8px' }} data-purchase="bid price">{formatter.format(item.bidAmount)}</td>
                                                            <td style={{ paddingLeft: '8px' }} data-purchase="highest bid">{formatDate(item.bidTime)}</td>
                                                        </tr>
                                                    )
                                                }
                                            })
                                            : ''
                                    }
                                </tbody>
                            </table>
                            <ReactPaginate
                                pageCount={totalPage2}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={1}
                                previousLabel={<div>{"<"}</div>}
                                nextLabel={<div>{">"}</div>}
                                containerClassName="pagination"
                                activeClassName="active"
                                onPageChange={handlePageClick2}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

