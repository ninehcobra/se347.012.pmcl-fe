const Notification = () => {
    return (
        <div>
            <div className="dash-bid-item dashboard-widget mb-30">
                <div className="header">
                    <h4 className="title mw-100">My Alerts</h4>
                </div>
                <ul className="button-area nav nav-tabs">
                    <li>
                        <a href="#alerts" data-toggle="tab" className="custom-button active">Alerts</a>
                    </li>
                    <li>
                        <a href="#newsletters" data-toggle="tab" className="custom-button">Newsletters</a>
                    </li>
                </ul>
            </div>
            <div className="dashboard-widget tab-content">
                <div className="alert-widget tab-pane show fade active" id="alerts">
                    <ul>
                        <li>
                            <input type="checkbox" id="check1" checked="" />
                            <label htmlFor="check1">
                                <h6 className="title">Bid Notifications</h6>
                                <p>Receive an email notifying you if someone else bids on an item on which you have already placed a bid.</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check2" />
                            <label htmlFor="check2">
                                <h6 className="title">Live Auction Reminder</h6>
                                <p>Get a reminder that a live auction you've registered for is about
                                    to begin.</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check3" checked="" />
                            <label htmlFor="check3">
                                <h6 className="title">Saved Items Going Live</h6>
                                <p>Get a reminder that items you've saved are going live in an auction.</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check4" />
                            <label htmlFor="check4">
                                <h6 className="title">Bids Ending Soon</h6>
                                <p>Get a reminder when items you've bid on are going live in the next
                                    couple days</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check5" checked="" />
                            <label htmlFor="check5">
                                <h6 className="title">Rate Your Experience</h6>
                                <p>Receive an email notifying you if someone else bids on an item on which you have already placed a bid.</p>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="alert-widget tab-pane show fade" id="newsletters">
                    <ul>
                        <li>
                            <input type="checkbox" id="check6" />
                            <label htmlFor="check6">
                                <h6 className="title">Auction News</h6>
                                <p>A roundup of the trending news and latest stories in the auction world</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check7" checked="" />
                            <label htmlFor="check7">
                                <h6 className="title">Auction Calendar</h6>
                                <p>A look at upcoming auctions, personalized just for you</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check8" />
                            <label htmlFor="check8">
                                <h6 className="title">Auction Reports</h6>
                                <p>An in-depth look at the results from top-performing auctions Once
                                    per month Auction Reports</p>
                            </label>
                        </li>
                        <li>
                            <input type="checkbox" id="check9" checked="" />
                            <label htmlFor="check9">
                                <h6 className="title">Weekly Email</h6>
                                <p>Preview the upcoming week's auctions and see the latest auction news
                                    from around the globe</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification

