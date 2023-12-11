import Header from "../components/header"
import Footer from "../components/footer"

const RootLayout = ({ children }) => {
    return (
        <body>
            <Header />
            {children}
            <Footer />
        </body>
    )
}

export default RootLayout