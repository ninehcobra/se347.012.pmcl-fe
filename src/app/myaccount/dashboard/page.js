const Dashboard = () => {
    return (
        <div>
            <div className="hero-section style-2 pb-lg-400">
                <div className="container">

                </div>
                <div className="bg_img hero-bg bottom_center" data-background="https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png" style={{ backgroundImage: 'url("https://pixner.net/sbidu/main/assets/images/banner/hero-bg.png")' }}></div>
            </div>
            <section className="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-7 col-lg-4">
                            <div className="dashboard-widget mb-30 mb-lg-0">
                                <div className="user">
                                    <div className="thumb-area">
                                        <div className="thumb">
                                            <img src="./assets/images/dashboard/user.png" alt="user" />
                                        </div>
                                        <label for="profile-pic" className="profile-pic-edit"><i className="flaticon-pencil"></i></label>
                                        <input type="file" id="profile-pic" className="d-none" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title"><a href="#0">Percy Reed</a></h5>
                                        <span className="username">john@gmail.com</span>
                                    </div>
                                </div>
                                <ul className="dashboard-menu">
                                    <li>
                                        <a href="#0" className="active"><i class="fa-solid fa-house-user"></i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile.html"><i class="fa-solid fa-gears"></i>Personal Profile </a>
                                    </li>
                                    <li>
                                        <a href="my-bid.html"><i className="flaticon-auction"></i>My Bids</a>
                                    </li>
                                    <li>
                                        <a href="winning-bids.html"><i className="flaticon-best-seller"></i>Winning Bids</a>
                                    </li>
                                    <li>
                                        <a href="notifications.html"><i className="flaticon-alarm"></i>My Alerts</a>
                                    </li>
                                    <li>
                                        <a href="my-favorites.html"><i className="flaticon-star"></i>My Favorites</a>
                                    </li>
                                    <li>
                                        <a href="referral.html"><i className="flaticon-shake-hand"></i>Referrals</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="dashboard-widget mb-40">
                                <div className="dashboard-title mb-30">
                                    <h5 className="title">My Activity</h5>
                                </div>
                                <div className="row justify-content-center mb-30-none">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="dashboard-item">
                                            <div className="thumb">
                                                <img src="https://pixner.net/sbidu/main/assets/images/dashboard/01.png" alt="dashboard" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title"><span className="counter">80</span></h2>
                                                <h6 className="info">Active Bids</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="dashboard-item">
                                            <div className="thumb">
                                                <img src="https://pixner.net/sbidu/main/assets/images/dashboard/02.png" alt="dashboard" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title"><span className="counter">15</span></h2>
                                                <h6 className="info">Items Won</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="dashboard-item">
                                            <div className="thumb">
                                                <img src="https://pixner.net/sbidu/main/assets/images/dashboard/03.png" alt="dashboard" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title"><span className="counter">115</span></h2>
                                                <h6 className="info">Favorites</h6>
                                                <div id="extwaiokist" style={{ display: 'none' }} v="nipgg" q="2a2a9de0" c="8.299" i="18" u="17.22" s="11202301" sg="svr_09102316-ga_11202301-bai_11222322" d="1" w="false" e="" a="3" m="BMe=" vn="9adfy"><div id="extwaigglbit" style={{ display: 'none' }} v="nipgg" q="2a2a9de0" c="8.299" i="18" u="17.22" s="11202301" sg="svr_09102316-ga_11202301-bai_11222322" d="1" w="false" e="" a="3" m="BMe="></div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-widget">
                                <h5 className="title mb-10">Purchasing</h5>
                                <div className="dashboard-purchasing-tabs">
                                    <ul className="nav-tabs nav">
                                        <li>
                                            <a href="#current" className="active" data-toggle="tab">Current</a>
                                        </li>
                                        <li>
                                            <a href="#pending" data-toggle="tab">Pending</a>
                                        </li>
                                        <li>
                                            <a href="#history" data-toggle="tab">History</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane show active fade" id="current">
                                            <table className="purchasing-table">
                                                <thead>
                                                    <tr><th>Item</th>
                                                        <th>Bid Price</th>
                                                        <th>Highest Bid</th>
                                                        <th>Lowest Bid</th>
                                                        <th>Expires</th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane show fade" id="pending">
                                            <table className="purchasing-table">
                                                <thead>
                                                    <tr><th>Item</th>
                                                        <th>Bid Price</th>
                                                        <th>Highest Bid</th>
                                                        <th>Lowest Bid</th>
                                                        <th>Expires</th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane show fade" id="history">
                                            <table className="purchasing-table">
                                                <thead>
                                                    <tr><th>Item</th>
                                                        <th>Bid Price</th>
                                                        <th>Highest Bid</th>
                                                        <th>Lowest Bid</th>
                                                        <th>Expires</th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-purchase="item">2018 Hyundai Sonata</td>
                                                        <td data-purchase="bid price">$1,775.00</td>
                                                        <td data-purchase="highest bid">$1,775.00</td>
                                                        <td data-purchase="lowest bid">$1,400.00</td>
                                                        <td data-purchase="expires">7/2/2021</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard