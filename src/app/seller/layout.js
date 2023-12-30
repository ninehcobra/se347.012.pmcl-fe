

import Sidebar from "./components/sidebar"
import { AuthCheck } from "../components/authcheck"
import Header from "./components/header"

const Layout = ({ children }) => {
    return (
        <div>
            <AuthCheck>
                <Header></Header>
                <Sidebar >
                    {children}
                </Sidebar>
            </AuthCheck>
        </div>
    )
}

export default Layout