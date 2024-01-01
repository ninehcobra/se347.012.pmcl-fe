'use client'
import Item from "./_components/item"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react"
import { getCategory, getDashboardProduct } from "@/services/productService"
import CountDown from "@/app/seller/components/countdown"

const Product = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 123, 123, 1, 123, 12, 31, 231, 23, 123, 123, 12, 312, 31, 31, 31]

    const [sortByPrice, setSortByPrice] = useState('asc')
    const [listProduct, setListProduct] = useState(null)
    const [categories, setCategories] = useState(null)
    const [refresh, setRefesh] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [name, setName] = useState('')

    const [limit, setLimit] = useState(9)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchProduct = async () => {
        let res = await getDashboardProduct({ sortByPrice, categoryId, name, limit, currentPage })
        if (res.EC === 0) {
            setListProduct(res.DT.products)
            setTotalPage(res.DT.totalPages)
            console.log(res.DT.products)
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

    }, [sortByPrice, categoryId, name, currentPage])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <div className="product-auction padding-bottom">
            <div className="container">
                <div style={{ backgroundColor: 'white' }} className="product-header mb-40">
                    <div className="product-header-item">
                        <div className="item">Phân loại : </div>
                        <select onChange={(e) => setCategoryId(e.target.value)} value={categoryId} style={{ height: '35px', width: '250px' }}>
                            <option key={666} value={''}>Tất cả</option>
                            {categories ? categories.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            }) : ''}
                        </select>

                    </div>

                    <form className="product-search ml-auto">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tên sản phẩm" />
                        <button disabled={true} type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="row mb-30-none justify-content-center">
                    {listProduct ? listProduct.map((product) => {
                        return (
                            <Item key={product.id} product={product} />
                        )
                    }) : ''}

                </div>
                <div className="mt-3">
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
                </div>
            </div>
        </div>
    )
}

export default Product