'use client'
import { getCategory, getFavorite } from "@/services/productService"
import { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import CountDown from "@/app/seller/components/countdown"

const Favorites = () => {
    const [listProduct, setListProduct] = useState(null)
    const [categories, setCategories] = useState(null)
    const [refresh, setRefesh] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [name, setName] = useState('')

    const [limit, setLimit] = useState(9)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchProduct = async () => {
        let res = await getFavorite({ categoryId, name, limit, currentPage })
        if (res.EC === 0) {
            setListProduct(res.DT.favorites)
            setTotalPage(res.DT.totalPages)

        }

    }

    const fetchCategory = async () => {
        let res = await getCategory()
        if (res.EC === 0) {
            setCategories(res.DT)
        }
        setRefesh(true)
    }

    useEffect(() => {
        fetchProduct()
        if (!refresh) {
            fetchCategory()
        }

    }, [categoryId, name, currentPage])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div>
            <div className="dash-bid-item dashboard-widget mb-40-60">
                <div className="header">
                    <h4 className="title">My Favorites</h4>
                </div >
                <div className="button-area justify-content-between" >
                    <form className="product-search" >
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tên sản phẩm" />
                        <button disabled={true} type="submit"><i className="fas fa-search"></i></button >
                    </form >
                    <div className="sort-winning-bid" >
                        <div className="item" > Loại: </div >
                        <select onChange={(e) => setCategoryId(e.target.value)} value={categoryId} style={{ height: '35px', width: '250px' }}>
                            <option key={666} value={''}>Tất cả</option>
                            {categories ? categories.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            }) : ''}
                        </select>
                    </div >
                </div >
            </div >
            <div className="row mb-30-none justify-content-center" >
                {
                    listProduct ?
                        listProduct.map((item) => {
                            return (
                                <div className="col-sm-10 col-md-6" >
                                    <div className="auction-item-2" >
                                        <div className="auction-thumb" >
                                            <a href="./product-details.html"><img src={JSON.parse(item.Product.images)[0]} alt="car" /></a>
                                            <a href="#0" className="rating" > <i className="far fa-star" ></i ></a >
                                            <a href="#0" className="bid" > <i className="flaticon-auction" ></i ></a >
                                        </div >
                                        <div className="auction-content" >
                                            <h6 className="title" >
                                                <a href="#0">{item.Product.name}</a>
                                            </h6 >
                                            <div className="bid-area" >
                                                <div style={{ padding: 0 }} className="bid-amount" >
                                                    <div className="icon" >
                                                        <i className="flaticon-auction" ></i >
                                                    </div >
                                                    <div style={{ alignItems: "center", padding: 0 }} className="amount-content" >
                                                        <div className="current" > Giá hiện tại</div >
                                                        <div className="amount" >{formatter.format(item.Product.currentPrice)} </div >
                                                    </div >
                                                </div >
                                                <div className="bid-amount" >
                                                    <div className="icon" >
                                                        <i className="flaticon-money" ></i >
                                                    </div >
                                                    <div className="amount-content" >
                                                        <div className="current" > Bước nhảy</div >
                                                        <div className="amount" >{formatter.format(item.Product.jumpPrice)} </div >
                                                    </div >
                                                </div >
                                            </div >
                                            <div style={{ alignItems: 'center' }} className="countdown-area" >
                                                <div className="countdown" >
                                                    <CountDown startDate={item.Product.startTime} endDate={item.Product.endTime} />
                                                </div >

                                            </div >
                                            <div className="text-center" >
                                                <a href={`/product/${item.Product.id}`} className="custom-button" > Đặt giá</a >
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            )
                        })
                        :
                        ''
                }


            </div >
            <ReactPaginate
                pageCount={totalPage}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel={<div>{"<"}</div>}
                nextLabel={<div>{">"}</div>}
                containerClassName="pagination"
                activeClassName="active"
                onPageChange={handlePageClick}
            />
        </div >
    )
}

export default Favorites

