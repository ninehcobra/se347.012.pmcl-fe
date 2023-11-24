'use client'
import Slider from "react-slick";
import "./browsesection.scss"

const BrowseSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        cssEase: "linear"
    };
    return (
        <div className="browse-section">
            <div className="browse-slider-section mt--140">
                <div className="container">
                    <div className="section-header">
                        Những lĩnh vực nỗi bật
                    </div>
                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            <div className="slider-item">
                                <a className="browse-item">
                                    <img src="https://pixner.net/sbidu/main/assets/images/auction/01.png"></img>
                                    <span>XE cộ</span>
                                </a>
                            </div>
                            <div className="slider-item">
                                <a className="browse-item">
                                    <img src="https://pixner.net/sbidu/main/assets/images/auction/02.png"></img>
                                    <span>đá quý</span>
                                </a>
                            </div>
                            <div className="slider-item">
                                <a className="browse-item">
                                    <img src="https://pixner.net/sbidu/main/assets/images/auction/03.png"></img>
                                    <span>đồng hồ</span>
                                </a>
                            </div>
                            <div className="slider-item">
                                <a className="browse-item">
                                    <img src="https://pixner.net/sbidu/main/assets/images/auction/04.png"></img>
                                    <span>điện tử</span>
                                </a>
                            </div>
                            <div className="slider-item">
                                <a className="browse-item">
                                    <img src="https://pixner.net/sbidu/main/assets/images/auction/05.png"></img>
                                    <span>Thể thao</span>
                                </a>
                            </div>
                            <div className="slider-item">
                                <a className="browse-item">
                                    <img src="https://pixner.net/sbidu/main/assets/images/auction/06.png"></img>
                                    <span>tài sản</span>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseSection