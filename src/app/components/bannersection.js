import './bannersection.scss'
import Link from 'next/link'
const BannerSection = () => {
    return (
        <section className='banner-section bg_img'>
            <div className='container'>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-lg-6 col-xl-6'>
                        <div className='banner-content'>
                            <h5 className="cate">Hệ thống đấu giá mới</h5>
                            <h1 className="title">
                                <span className="d-xl-block">Tìm </span>
                                Deal Nào!
                            </h1>
                            <p>
                                Đấu giá trực tuyến là nơi mọi người đến mua sắm, bán và cho đi, đồng thời khám phá sự đa dạng và khả năng chi trả.
                            </p>
                            <a href="/login" className="custom-button">Bắt đầu</a>
                        </div>
                    </div>
                    <div className='d-none d-lg-block col-lg-6'>
                        <div className="banner-thumb">
                            <img src="https://pixner.net/sbidu/main/assets/images/banner/banner-1.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection