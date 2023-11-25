const PersonalProfile = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Personal Details</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Name</div>
                                <div className="info-value">Albert Owens</div>
                            </li>
                            <li>
                                <div className="info-name">Date of Birth</div>
                                <div className="info-value">15-03-1974</div>
                            </li>
                            <li>
                                <div className="info-name">Address</div>
                                <div className="info-value">8198 Fieldstone Dr.La Crosse, WI 54601</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Account Settings</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Language</div>
                                <div className="info-value">English (United States)</div>
                            </li>
                            <li>
                                <div className="info-name">Time Zone</div>
                                <div className="info-value">(GMT-06:00) Central America</div>
                            </li>
                            <li>
                                <div className="info-name">Status</div>
                                <div className="info-value"><i className="flaticon-check text-success"></i> Active</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Email Address</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Email</div>
                                <div className="info-value">albert349@gmail.com</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                        <div className="header">
                            <h4 className="title">Phone</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Mobile</div>
                                <div className="info-value">+1 234-567-8925</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div className="dash-pro-item dashboard-widget">
                        <div className="header">
                            <h4 className="title">Security</h4>
                            <span className="edit"><i className="flaticon-edit"></i> Edit</span>
                        </div>
                        <ul className="dash-pro-body">
                            <li>
                                <div className="info-name">Password</div>
                                <div className="info-value">xxxxxxxxxxxxxxxx</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalProfile

