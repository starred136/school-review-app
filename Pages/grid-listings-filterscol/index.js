import React from "react";

export default function GridListings(){
    return(
        <>
        <main>
  <div id="results">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-3 col-md-4 col-10">
          <h1>
            <strong>145</strong> result for "All categories"
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
  <div className="container margin_60_35">
    <div className="row">
      <aside className="col-lg-3" id="sidebar">
        <div id="filters_col">
          <a
            data-bs-toggle="collapse"
            href="#collapseFilters"
            aria-expanded="false"
            aria-controls="collapseFilters"
            id="filters_col_bt"
          >
            Filters{" "}
          </a>
          <div className="collapse show" id="collapseFilters">
            <div className="filter_type date_filter">
              <h6>Date</h6>
              <ul>
                <li>
                  <label className="container_radio">
                    All
                    <input
                      type="radio"
                      id="all_2"
                      name="filters_listing"
                      defaultValue="all"
                      defaultChecked=""
                      data-filter="*"
                      className="selected"
                    />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">
                    Latest
                    <input
                      type="radio"
                      id="latest"
                      name="filters_listing"
                      defaultValue="latest"
                      data-filter=".latest"
                    />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">
                    Oldest
                    <input
                      type="radio"
                      id="oldest"
                      name="filters_listing"
                      defaultValue="oldest"
                      data-filter=".oldest"
                    />
                    <span className="checkmark" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter_type">
              <h6>Category</h6>
              <ul>
                <li>
                  <label className="container_check">
                    Restaurants <small>43</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">
                    Shops <small>33</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">
                    Bars <small>12</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">
                    Events <small>44</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter_type">
              <h6>Rating</h6>
              <ul>
                <li>
                  <label className="container_check">
                    Superb 9+ <small>34</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">
                    Very Good 8+ <small>21</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">
                    Good 7+ <small>15</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">
                    Pleasant 6+ <small>34</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/*/collapse */}
        </div>
        {/*/filters col*/}
      </aside>
      {/* /aside */}
      <div className="col-lg-9">
        <div className="isotope-wrapper">
          <div className="row">
            <div className="col-md-6 isotope-item latest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar1.jpg" alt="" />
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
                  <strong>Jhon Doe</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Avesome Experience"</h4>
                <p>
                  Et nec tantas accusamus salutatus, sit commodo veritus
                  te.Viderer petentium cu his. Tollit molestie suscipiantur his
                  et...
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item latest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar2.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half" />
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Marika</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Great products"</h4>
                <p>Et nec tantas accusamus salutatus</p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item latest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
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
                <p>
                  Mucius doctus constituto pri at, ne cetero postulant pro. At
                  vix utinam corpora, ea oblique moderatius usu. Vix id viris
                  consul honestatis, an constituto deterruisset consectetuer
                  pro.....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item oldest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar4.jpg" alt="" />
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
                <p>
                  Et nec tantas accusamus salutatus, sit commodo veritus te,
                  erat legere fabulas has ut. Rebum laudem cum ea, ius essent
                  fuisset ut....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item oldest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar5.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half" />
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Margaret</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Perfect"</h4>
                <p>
                  Mucius doctus constituto pri at, ne cetero postulant pro. At
                  vix utinam corpora, ea oblique moderatius usu. Vix id viris
                  consul honestatis, an constituto deterruisset consectetuer
                  pro.....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item oldest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar6.jpg" alt="" />
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
                  <strong>Tom Jones</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Everything good"</h4>
                <p>
                  Et nec tantas accusamus salutatus, sit commodo veritus te,
                  erat legere fabulas has ut. Rebum laudem cum ea, ius essent
                  fuisset ut....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item latest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar7.jpg" alt="" />
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
                  <strong>Jhon Doe</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Avesome Experience"</h4>
                <p>
                  Et nec tantas accusamus salutatus, sit commodo veritus
                  te.Viderer petentium cu his. Tollit molestie suscipiantur his
                  et...
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item latest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar8.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half" />
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Marika</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Great products"</h4>
                <p>Et nec tantas accusamus salutatus</p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item latest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar.jpg" alt="" />
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
                <p>
                  Mucius doctus constituto pri at, ne cetero postulant pro. At
                  vix utinam corpora, ea oblique moderatius usu. Vix id viris
                  consul honestatis, an constituto deterruisset consectetuer
                  pro.....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item oldest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
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
                  <strong>Mark Twain</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Shipping Very Fast"</h4>
                <p>
                  Et nec tantas accusamus salutatus, sit commodo veritus te,
                  erat legere fabulas has ut. Rebum laudem cum ea, ius essent
                  fuisset ut....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item oldest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar6.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half" />
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Margaret</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Perfect"</h4>
                <p>
                  Mucius doctus constituto pri at, ne cetero postulant pro. At
                  vix utinam corpora, ea oblique moderatius usu. Vix id viris
                  consul honestatis, an constituto deterruisset consectetuer
                  pro.....
                </p>
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
            {/* /review_listing grid */}
            <div className="col-md-6 isotope-item oldest">
              <div className="review_listing">
                <div className="clearfix add_bottom_15">
                  <figure>
                    <img src="assets/img/avatar8.jpg" alt="" />
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
                  <strong>Tom Jones</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Everything good"</h4>
                <p>
                  Et nec tantas accusamus salutatus, sit commodo veritus te,
                  erat legere fabulas has ut. Rebum laudem cum ea, ius essent
                  fuisset ut....
                </p>
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
            {/* /review_listing grid */}
          </div>
          {/* /row */}
        </div>
        {/* /isotope-wrapper */}
        <p className="text-center">
          <a href="#0" className="btn_1 rounded add_top_15">
            Load more
          </a>
        </p>
      </div>
      {/* /col */}
    </div>
  </div>
  {/* /container */}
</main>

        </>
    )
}