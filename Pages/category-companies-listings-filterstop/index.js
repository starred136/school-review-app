import React from "react";

export default function CategoryCompagnies(){
    return(
        <>
        <main>
  <div id="results">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-3 col-md-4 col-10">
          <h1>
            <strong>145</strong> result for "Category"
          </h1>
        </div>
        <div className="col-xl-5 col-md-6 col-2">
          <a href="#0" className="search_mob btn_search_mobile" />{" "}
          {/* /open search panel */}
          <div className="row g-0 custom-search-input-2 inner">
            <div className="col-lg-7">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search reviews for a company"
                />
                <i className="icon_search" />
              </div>
            </div>
            <div className="col-lg-4">
              <select className="wide">
                <option>All Categories</option>
                <option>Shops</option>
                <option>Hotels</option>
                <option>Restaurants</option>
                <option>Bars</option>
                <option>Events</option>
                <option>Fitness</option>
              </select>
            </div>
            <div className="col-xl-1 col-lg-1">
              <input type="submit" defaultValue="Search" />
            </div>
          </div>
        </div>
      </div>
      {/* /row */}
      <div className="search_mob_wp">
        <div className="custom-search-input-2">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search reviews..."
            />
            <i className="icon_search" />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Where" />
            <i className="icon_pin_alt" />
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
      </div>
      {/* /search_mobile */}
    </div>
    {/* /container */}
  </div>
  {/* /results */}
  <div className="filters_listing sticky_horizontal">
    <div className="container">
      <ul className="clearfix">
        <li>
          <div className="switch-field">
            <input
              type="radio"
              id="all"
              name="listing_filter"
              defaultValue="all"
              defaultChecked=""
              data-filter="*"
              className="selected"
            />
            <label htmlFor="all">All</label>
            <input
              type="radio"
              id="high"
              name="listing_filter"
              defaultValue="high"
              data-filter=".high"
            />
            <label htmlFor="high">High rated</label>
            <input
              type="radio"
              id="low"
              name="listing_filter"
              defaultValue="low"
              data-filter=".low"
            />
            <label htmlFor="low">Low rated</label>
          </div>
        </li>
        <li>
          <a
            className="btn_filt"
            data-bs-toggle="collapse"
            href="#filters"
            aria-expanded="false"
            aria-controls="filters"
            data-text-swap="Less filters"
            data-text-original="More filters"
          >
            More filters
          </a>
        </li>
      </ul>
    </div>
    {/* /container */}
  </div>
  {/* /filters */}
  <div className="collapse" id="filters">
    <div className="container margin_30_5">
      <div className="row">
        <div className="col-md-4">
          <h6>Rating</h6>
          <ul>
            <li>
              <label className="container_check">
                Superb 9+ <small>67</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_check">
                Very Good 8+ <small>89</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_check">
                Good 7+ <small>45</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_check">
                Pleasant 6+ <small>78</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Tags</h6>
          <ul>
            <li>
              <label className="container_check">
                Soluta mei <small>12</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_check">
                Enim suscipit <small>11</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_check">
                Duis veri <small>23</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_check">
                Dicunt nam <small>56</small>
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="add_bottom_30">
            <h6>Distance</h6>
            <div className="distance">
              {" "}
              Radius around selected destination <span /> km
            </div>
            <input
              type="range"
              min={10}
              max={100}
              step={10}
              defaultValue={30}
              data-orientation="horizontal"
            />
          </div>
        </div>
      </div>
      {/* /row */}
    </div>
  </div>
  {/* /Filters */}
  <div className="container margin_60_35">
    <div className="isotope-wrapper">
      <div className="company_listing isotope-item high">
        <div className="row">
          <div className="col-md-9">
            <div className="company_info">
              <figure>
                <a href="reviews-page.html">
                  <img src="assets/img/brands/1.png" alt="" />
                </a>
              </figure>
              <h3>American Coffee</h3>
              <p>
                Tale tollit vocent quo ut. Eu vix menandri persequeris
                accommodare, nam ei virtute dissentiet. Nec prima indoctum ei,
                vis eu justo dictas tamquam...
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center float-lg-end">
              <span className="rating">
                <strong>Based on 265 reviews</strong>
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
              </span>
              <a href="reviews-page.html" className="btn_1 small">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /company_listing */}
      <div className="company_listing isotope-item high">
        <div className="row">
          <div className="col-md-9">
            <div className="company_info">
              <figure>
                <a href="reviews-page.html">
                  <img src="assets/img/brands/2.png" alt="" />
                </a>
              </figure>
              <h3>Timberland</h3>
              <p>
                Tale tollit vocent quo ut. Eu vix menandri persequeris
                accommodare, nam ei virtute dissentiet. Nec prima indoctum ei,
                vis eu justo dictas tamquam...
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center float-lg-end">
              <span className="rating">
                <strong>Based on 265 reviews</strong>
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
              </span>
              <a href="reviews-page.html" className="btn_1 small">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /company_listing */}
      <div className="company_listing isotope-item low">
        <div className="row">
          <div className="col-md-9">
            <div className="company_info">
              <figure>
                <a href="reviews-page.html">
                  <img src="assets/img/brands/3.png" alt="" />
                </a>
              </figure>
              <h3>Elite</h3>
              <p>
                Tale tollit vocent quo ut. Eu vix menandri persequeris
                accommodare, nam ei virtute dissentiet. Nec prima indoctum ei,
                vis eu justo dictas tamquam...
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center float-lg-end">
              <span className="rating">
                <strong>Based on 265 reviews</strong>
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <i className="icon_star empty" />
              </span>
              <a href="reviews-page.html" className="btn_1 small">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /company_listing */}
      <div className="company_listing isotope-item low">
        <div className="row">
          <div className="col-md-9">
            <div className="company_info">
              <figure>
                <a href="reviews-page.html">
                  <img src="assets/img/brands/5.png" alt="" />
                </a>
              </figure>
              <h3>Williams</h3>
              <p>
                Tale tollit vocent quo ut. Eu vix menandri persequeris
                accommodare, nam ei virtute dissentiet. Nec prima indoctum ei,
                vis eu justo dictas tamquam...
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center float-lg-end">
              <span className="rating">
                <strong>Based on 265 reviews</strong>
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <i className="icon_star empty" />
                <i className="icon_star empty" />
              </span>
              <a href="reviews-page.html" className="btn_1 small">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /company_listing */}
      <div className="company_listing isotope-item high">
        <div className="row">
          <div className="col-md-9">
            <div className="company_info">
              <figure>
                <a href="reviews-page.html">
                  <img src="assets/img/brands/6.png" alt="" />
                </a>
              </figure>
              <h3>Fairlane</h3>
              <p>
                Tale tollit vocent quo ut. Eu vix menandri persequeris
                accommodare, nam ei virtute dissentiet. Nec prima indoctum ei,
                vis eu justo dictas tamquam...
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center float-lg-end">
              <span className="rating">
                <strong>Based on 265 reviews</strong>
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
              </span>
              <a href="reviews-page.html" className="btn_1 small">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /company_listing */}
      <div className="company_listing isotope-item high">
        <div className="row">
          <div className="col-md-9">
            <div className="company_info">
              <figure>
                <a href="reviews-page.html">
                  <img src="assets/img/brands/8.png" alt="" />
                </a>
              </figure>
              <h3>Fairlane Clothing</h3>
              <p>
                Tale tollit vocent quo ut. Eu vix menandri persequeris
                accommodare, nam ei virtute dissentiet. Nec prima indoctum ei,
                vis eu justo dictas tamquam...
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center float-lg-end">
              <span className="rating">
                <strong>Based on 265 reviews</strong>
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
              </span>
              <a href="reviews-page.html" className="btn_1 small">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /company_listing */}
    </div>
    {/* /isotope-wrapper */}
    <p className="text-center">
      <a href="#0" className="btn_1 rounded add_top_15">
        Load more
      </a>
    </p>
  </div>
  {/* /container */}
</main>

        </>
    )
}