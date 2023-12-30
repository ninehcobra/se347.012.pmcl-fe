'use client'
import { useRouter } from "next/navigation"
import "./product.scss"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getCategory, getOwnProduct } from "@/services/productService"
import ReactPaginate from 'react-paginate';
import CountDowm from "../components/countdown"
const Product = () => {
    const router = useRouter()

    const [sortByPrice, setSortByPrice] = useState('asc')
    const [listProduct, setListProduct] = useState(null)
    const [categories, setCategories] = useState(null)
    const [refresh, setRefesh] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [name, setName] = useState('')

    const [limit, setLimit] = useState(10)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchProduct = async () => {
        let res = await getOwnProduct({ sortByPrice, categoryId, name, limit, currentPage })
        if (res.EC === 0) {
            setListProduct(res.DT.products)
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

    }, [sortByPrice, categoryId, name, currentPage])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }

    return (
        <div className="course-wrapper">

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '4px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '8px' }}>Loại:</div>
                    <select onChange={(e) => setCategoryId(e.target.value)} value={categoryId} style={{ height: '35px', width: '250px' }}>
                        <option key={666} value={''}>Tất cả</option>
                        {categories ? categories.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        }) : ''}
                    </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '4px' }}>Tên sản phẩm:</div>
                    <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: '180px' }} placeholder="Lọc theo tên" />
                </div>
                <Link href="/seller/create">
                    <button style={{
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        padding: '10px 20px', // Thêm padding để làm cho nút rộng hơn
                        background: '#3498db', // Màu nền
                        color: 'white', // Màu chữ
                        cursor: 'pointer', // Hiển thị con trỏ khi rê chuột qua nút
                        transition: 'background 0.3s ease', // Hiệu ứng chuyển đổi màu nền
                        outline: 'none', // Loại bỏ đường viền khi nút được chọn
                    }}>
                        Thêm sản phẩm
                    </button>

                </Link>
            </div>
            <div style={{ height: '600px' }}>
                <table style={{ marginTop: '10px', }} class="table ">
                    <thead >
                        <tr className="table-secondary" style={{ border: '1px solid #80808033', }}>
                            <th>Tên sản phẩm </th>
                            <th>
                                <div onClick={() => setSortByPrice(sortByPrice === 'asc' ? 'desc' : 'asc')}>
                                    Giá hiện tại <i style={{ cursor: 'pointer' }} className="fa-solid fa-sort"></i>
                                </div>
                            </th>
                            <th>Tình trạng </th>
                            <th>Thời gian còn lại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listProduct ? listProduct.map(item => {
                                return (
                                    <tr style={{ border: '1px solid #80808033' }}>
                                        <td>{item.name}</td>
                                        <td>{item.currentPrice ? item.currentPrice : '0'} VNĐ</td>
                                        <td >{item.isPublished ?
                                            <div style={{ height: '25px', width: '80px', backgroundColor: '#0268A0', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                                                Công khai
                                            </div>
                                            :
                                            <div style={{ height: '25px', width: '60px', backgroundColor: '#808080', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>
                                                Ẩn
                                            </div>
                                        }</td>
                                        <th><CountDowm endDate={item.endTime} /></th>
                                        <th><a style={{ textDecoration: 'none' }} href={`/seller/product/${item.id}`}>...</a></th>
                                    </tr>
                                )
                            }) : ''
                        }
                    </tbody>
                </table>
            </div>
            <div className="pagination_wrapper">
                <ReactPaginate
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={4}
                    pageCount={totalPage}
                    previousLabel="<<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}

                />
            </div>
        </div>
    )
}

export default Product