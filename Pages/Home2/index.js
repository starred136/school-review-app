import React from "react";

export default function Home2(){
    return(
        <>
        <main>
  <section className="hero_single version_2">
    <div className="wrapper">
      <div className="container">
        <div className="row justify-content-center pt-lg-5">
          <div className="col-xl-5 col-lg-6">
            <h3>
              Every Review
              <br />
              is an Experience!
            </h3>
            <p>Check Ratings of Businesses, Read Reviews &amp; Buy</p>
            <form method="post" action="grid-listings-filterscol.html">
              <div className="custom-search-input-2">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What are you looking for..."
                  />
                  <i className="icon_search" />
                </div>
                <select className="wide">
                  <option>All Categories</option>
                  <option>Shops</option>
                  <option>Hotels</option>
                  <option>Restaurants</option>
                  <option>Bars</option>
                  <option>Events</option>
                  <option>Fitness</option>
                </select>
                <input type="submit" defaultValue="Search" />
              </div>
            </form>
          </div>
          <div className="col-xl-5 col-lg-6 text-end d-none d-lg-block">
            <img src="assets/img/graphic_home_2.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /hero_single */}
  <div className="container margin_60_35">
    <div className="main_title_3">
      <h2>Top Categories</h2>
      <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      <a href="all-categories.html">View all</a>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_1.svg" width={65} height={65} alt="" />
          <h3>Clothing</h3>
          <ul className="clearfix">
            <li>
              <strong>1,023</strong> Results
            </li>
            <li>
              <strong>2,435</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_2.svg" width={65} height={65} alt="" />
          <h3>Hotels</h3>
          <ul className="clearfix">
            <li>
              <strong>856</strong> Results
            </li>
            <li>
              <strong>455</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_3.svg" width={65} height={65} alt="" />
          <h3>Restaurants</h3>
          <ul className="clearfix">
            <li>
              <strong>2,400</strong> Results
            </li>
            <li>
              <strong>1,323</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_4.svg" width={65} height={65} alt="" />
          <h3>Bars</h3>
          <ul className="clearfix">
            <li>
              <strong>854</strong> Results
            </li>
            <li>
              <strong>345</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_8.svg" width={65} height={65} alt="" />
          <h3>Electronics</h3>
          <ul className="clearfix">
            <li>
              <strong>1,210</strong> Results
            </li>
            <li>
              <strong>530</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_5.svg" width={65} height={65} alt="" />
          <h3>Beauty</h3>
          <ul className="clearfix">
            <li>
              <strong>1,343</strong> Results
            </li>
            <li>
              <strong>315</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_6.svg" width={65} height={65} alt="" />
          <h3>Fitness</h3>
          <ul className="clearfix">
            <li>
              <strong>678</strong> Results
            </li>
            <li>
              <strong>123</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
      <div className="col-lg-3 col-6">
        <a href="grid-listings-filterstop.html" className="box_cat_home">
          <img src="assets/img/icon_home_7.svg" width={65} height={65} alt="" />
          <h3>Doctors</h3>
          <ul className="clearfix">
            <li>
              <strong>378</strong> Results
            </li>
            <li>
              <strong>560</strong>
              <i className="icon-comment" />
            </li>
          </ul>
        </a>
      </div>
    </div>
  </div>
  {/* /container */}
  <div className="bg_color_1">
    <div className="container margin_60">
      <div className="main_title_3">
        <h2>Latest Reviews</h2>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        <a href="#0">View all</a>
      </div>
      <div id="reccomended" className="owl-carousel owl-theme">
        <div className="item">
          <div className="review_listing">
            <div className="clearfix">
              <figure>
                <img src="assets/img/avatar1.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <em>4.50/5.00</em>
              </span>
              <small>Shops</small>
            </div>
            <h3>
              <strong>Jhon Doe</strong> reviewed{" "}
              <a href="reviews-page.html">Fnac</a>
            </h3>
            <h4>"Avesome Experience"</h4>
            <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
            <ul className="clearfix">
              <li>
                <small>Published: 26.08.2018</small>
              </li>
              <li>
                <a href="reviews-page.html" className="btn_1 small">
                  Read review
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="review_listing">
            <div className="clearfix">
              <figure>
                <img src="assets/img/avatar2.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <i className="icon_star empty" />
                <em>4.50/5.00</em>
              </span>
              <small>Shops</small>
            </div>
            <h3>
              <strong>Marika</strong> reviewed{" "}
              <a href="reviews-page.html">Fnac</a>
            </h3>
            <h4>"Great products"</h4>
            <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
            <ul className="clearfix">
              <li>
                <small>Published: 26.08.2018</small>
              </li>
              <li>
                <a href="reviews-page.html" className="btn_1 small">
                  Read review
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="review_listing">
            <div className="clearfix">
              <figure>
                <img src="assets/img/avatar3.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <em>4.50/5.00</em>
              </span>
              <small>Shops</small>
            </div>
            <h3>
              <strong>Lukas Lee</strong> reviewed{" "}
              <a href="reviews-page.html">Fnac</a>
            </h3>
            <h4>"Excellent Support"</h4>
            <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
            <ul className="clearfix">
              <li>
                <small>Published: 26.08.2018</small>
              </li>
              <li>
                <a href="reviews-page.html" className="btn_1 small">
                  Read review
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="review_listing">
            <div className="clearfix">
              <figure>
                <img src="assets/img/avatar4.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <em>4.50/5.00</em>
              </span>
              <small>Shops</small>
            </div>
            <h3>
              <strong>Margaret</strong> reviewed{" "}
              <a href="reviews-page.html">Fnac</a>
            </h3>
            <h4>"Perfect"</h4>
            <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
            <ul className="clearfix">
              <li>
                <small>Published: 26.08.2018</small>
              </li>
              <li>
                <a href="reviews-page.html" className="btn_1 small">
                  Read review
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="review_listing">
            <div className="clearfix">
              <figure>
                <img src="assets/img/avatar5.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <em>4.50/5.00</em>
              </span>
              <small>Shops</small>
            </div>
            <h3>
              <strong>Mark Twain</strong> reviewed{" "}
              <a href="reviews-page.html">Fnac</a>
            </h3>
            <h4>"Shipping Very Fast"</h4>
            <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
            <ul className="clearfix">
              <li>
                <small>Published: 26.08.2018</small>
              </li>
              <li>
                <a href="#0" className="btn_1 small">
                  Read review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /carousel */}
    </div>
    {/* /container */}
  </div>
  {/* /bg_color_1 */}
  <div className="call_section">
    <div className="container margin_80_55">
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
          <img alt="" className="img-fluid" src="assets/img/graphic_home_1.svg" />
        </div>
        <div className="col-xl-5 col-lg-6 pt-lg-5">
          <h3>Let's Help You</h3>
          <p>
            Vanno is a review platform open to everyone. Share your experiences
            to help others make better choices, and help companies up their
            game. Our mission is to bring people and companies together to
            create experiences for everyone.
          </p>
          <p>
            <a
              className="btn_1 add_top_10 wow bounceIn"
              href="pricing.html"
              data-wow-delay="0.5s"
            >
              Join Vanno Now!
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* /container */}
  </div>
  {/* /call_section */}
</main>

        </>
    )
}