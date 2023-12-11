const Referrals = () => {
    return (
        <div>
            <div className="dashboard-widget mb-30">
                <h4 className="title mt-0 mb-20">Welcome to the Sbidu Referral program.</h4>
                <p>Have friends sign up using your unique link and earn rewards.</p>
            </div>
            <div className="dashboard-widget mb-30">
                <h5 className="title mt-0 mb-20">Share your unique referral link</h5>
                <form action="#0" className="referral-form mb-30">
                    <input type="text" value="https://Sbidu.com?grsf=y4wyd8" readonly="" />
                    <button type="submit" className="custom-button">Copy Link</button>
                </form>
                <div className="share-area">
                    <div className="left">
                        Share :
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="#0" className="active"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="dashboard-widget mb-30">
                <h5 className="title mt-0 mb-30">Promotions &amp; Rewards</h5>
                <p className="mb-3 mb-md-4">Give $5 off to a friend and get $5 credit after they make a purchase</p>
                <a href="#0" className="custom-button pink"><i className="flaticon-trophy"></i> 1 Referrals Required</a>
            </div>
            <div className="dashboard-widget mb-30">
                <h5 className="title mt-0 mb-20">Leaderboard</h5>
                <table className="referral-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Sbidu Bidder</th>
                            <th>Referrals</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="rank">#01</td>
                            <td data-label="Sbidu bidder">jo*@m**********</td>
                            <td data-label="referrals">01</td>
                        </tr>
                        <tr>
                            <td data-label="rank">#02</td>
                            <td data-label="Sbidu bidder">ma****************@y********</td>
                            <td data-label="referrals">01</td>
                        </tr>
                        <tr>
                            <td data-label="rank">#03</td>
                            <td data-label="Sbidu bidder">ho********@y********</td>
                            <td data-label="referrals">00</td>
                        </tr>
                        <tr>
                            <td data-label="rank">#04</td>
                            <td data-label="Sbidu bidder">ma****************@y********</td>
                            <td data-label="referrals">00</td>
                        </tr>
                        <tr>
                            <td data-label="rank">#05</td>
                            <td data-label="Sbidu bidder">ru*@f**********</td>
                            <td data-label="referrals">00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="dashboard-widget">
                <h5 className="title mt-0 mb-30">Your Stats</h5>
                <h3 className="stats">08<span>Referrals Made</span></h3>
            </div>

        </div>
    )
}

export default Referrals

