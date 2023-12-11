import Footer from "../components/footer"
import Header from "../components/header"
import Sidebar from "./components/sidebar"
import { AuthCheck } from "../components/authcheck"

const Layout = ({ children }) => {
    return (
        <div>
            <AuthCheck>
                <Sidebar >
                    {children}
                </Sidebar>
            </AuthCheck>
        </div>
    )
}

export default Layout