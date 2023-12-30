'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./sidebar.scss"
import { pathToRegexp } from 'path-to-regexp';
const Sidebar = ({ children }) => {
    const pathname = usePathname()
    const coursesIdPath = pathToRegexp('/seller/product/:id');
    const isCoursesIdPath = coursesIdPath.test(pathname);

    return (
        <div className="app_sidebar">
            <div className="app_sidebar_wrap teacher_mode">
                <div className="app_sidebar_wrapper" id="sidebar">

                    <ul className="sidebar_list">
                        <li>
                            <a aria-current="page" className={pathname === '/seller/product' || pathname === '/seller/create' || isCoursesIdPath ? "sidebar_item  onselect" : "sidebar_item"} href="/seller/product">
                                <i className="fa-solid fa-store"></i>
                                <span>Sản phẩm</span>
                            </a>
                        </li>
                        <li>
                            <a className={pathname === "/seller/analytics" ? "sidebar_item  onselect" : "sidebar_item"} href="/seller/analytics">
                                <i className="fa-solid fa-chart-simple"></i>
                                <span>Thống kê</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* content */}
            <div className="app_sidebar_content">
                {children}
            </div>
        </div>
    )
}

export default Sidebar