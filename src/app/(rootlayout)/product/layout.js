

const Layout = ({ children }) => {
    return (
        <div>
            <div className="hero-section style-2">
                <div className="container">
                    <ul className="breadcrumb">

                    </ul>
                </div>
                <div className="bg_img hero-bg bottom_center" data-background="https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png" style={{ backgroundImage: 'url("https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png")' }}></div>
            </div>
            <div className="featured-auction-section padding-bottom mt--240 mt-lg--440 pos-rel">
                {children}
            </div>


        </div>
    )
}

export default Layout