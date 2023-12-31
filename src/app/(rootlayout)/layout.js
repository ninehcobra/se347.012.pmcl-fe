import Header from "../components/header"
import Footer from "../components/footer"

const RootLayout = ({ children }) => {
    return (
        <body suppressHydrationWarning={true}>
            <Header />
            {children}
            <Footer />
        </body>
    )
}

export default RootLayout