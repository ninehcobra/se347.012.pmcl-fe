'use client'
import Item from "./_components/item"
import ReactPaginate from "react-paginate"

const Product = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 123, 123, 1, 123, 12, 31, 231, 23, 123, 123, 12, 312, 31, 31, 31]
    return (
        <div className="product-auction padding-bottom">
            <div className="container">
                <div style={{ backgroundColor: 'white' }} className="product-header mb-40">
                    <div className="product-header-item">
                        <div className="item">Sort By : </div>
                        <select name="sort-by" className="select-bar" >
                            <option value="all">All</option>
                            <option value="name">Name</option>
                            <option value="date">Date</option>
                            <option value="type">Type</option>
                            <option value="car">Car</option>
                        </select>

                    </div>

                    <form className="product-search ml-auto">
                        <input type="text" placeholder="Item Name" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="row mb-30-none justify-content-center">
                    {arr.map((e) => {
                        return (
                            <Item key={e} />
                        )
                    })}

                </div>
                <div className="mt-3">
                    <ReactPaginate
                        pageCount={5}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        previousLabel={<div>{"<"}</div>}
                        nextLabel={<div>{">"}</div>}
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </div>
        </div>
    )
}

export default Product