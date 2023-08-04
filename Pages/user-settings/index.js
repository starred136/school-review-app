import React from "react";

export default function UserSeting(){
    return(
        <>
        <main className="margin_main_container">
  <div className="user_summary">
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <figure>
              <img src="assets/img/avatar4.jpg" alt="" />
            </figure>
            <h1>Mark Steinberg</h1>
            <span>United States</span>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <strong>3</strong>
                <a
                  href="#0"
                  className="tooltips"
                  data-bs-toggle="tooltip"
                  data-placement="bottom"
                  title="Reviews written by you"
                >
                  <i className="icon_star" /> Reviews
                </a>
              </li>
              <li>
                <strong>12</strong>
                <a
                  href="#0"
                  className="tooltips"
                  data-bs-toggle="tooltip"
                  data-placement="bottom"
                  title="Number of people who have read your reviews"
                >
                  <i className="icon-user-1" /> Reads
                </a>
              </li>
              <li>
                <strong>36</strong>
                <a
                  href="#0"
                  className="tooltips"
                  data-bs-toggle="tooltip"
                  data-placement="bottom"
                  title="Number of people who found your review useful"
                >
                  <i className="icon_like_alt" /> Useful
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /container */}
    </div>
  </div>
  {/* /user_summary */}
  <div className="container margin_60_35">
    <div className="row">
      <div className="col-lg-8">
        <div className="settings_panel">
          <h3>Personal settings</h3>
          <hr />
          <div className="form-group">
            <label>Edit Profile text</label>
            <textarea
              className="form-control"
              style={{ height: 180 }}
              placeholder="Your profile"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label>Edit Photo</label>
            <div className="fileupload">
              <input type="file" name="fileupload" accept="image/*" />
            </div>
          </div>
          <div className="form-group">
            <label>Edit Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="mark@domani.com"
            />
          </div>
          <div className="form-group">
            <label>Edit Full name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Mark Steinberg"
            />
          </div>
          <div className="form-group">
            <label>Edit City</label>
            <input className="form-control" type="text" placeholder="Malaga" />
          </div>
          <div className="form-group">
            <label>Edit Country</label>
            <input className="form-control" type="text" placeholder="Malaga" />
          </div>
          <p className="text-end">
            <a className="btn_1 small add_top_15" href="#0">
              Save personal info
            </a>
          </p>
        </div>
        {/* /settings_panel */}
        <div className="settings_panel">
          <h3>Change password</h3>
          <hr />
          <div className="form-group">
            <label>Current Password</label>
            <input className="form-control" type="password" id="password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input className="form-control" type="password" id="password1" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input className="form-control" type="password" id="password2" />
          </div>
          <div id="pass-info" className="clearfix" />
          <p className="text-end">
            <a className="btn_1 small" href="#0">
              Save password
            </a>
          </p>
        </div>
        {/* /settings_panel */}
      </div>
      {/* /col */}
      <div className="col-lg-4" id="sidebar">
        <div className="box_general">
          <h5>Delete account</h5>
          <p>
            At nec senserit aliquando intellegat, et graece facilisis pro. Per
            in ridens sensibus interesset, eos ei nonumes incorrupte, iriure
            diceret an eos.
          </p>
          <a href="#" className="btn_1 small">
            Delete account
          </a>
        </div>
      </div>
    </div>
    {/* /row */}
  </div>
  {/* /container */}
</main>

        </>
    )
}