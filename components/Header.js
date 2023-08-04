import Head from "next/head";
import Link from "next/link";

export default function Header(props){
    return(
        <>
        <header className="header menu_fixed">
  <div id="logo">
    <a href="index.html">
      <img
        src="assets/img/logo.svg"
        width={140}
        height={35}
        alt=""
        className="logo_normal"
      />
      <img
        src="img/logo_sticky.svg"
        width={140}
        height={35}
        alt=""
        className="logo_sticky"
      />
    </a>
  </div>
  <ul id="top_menu">
    <li>
      <a href="write-review.html" className="btn_top">
        Write a Review
      </a>
    </li>
    <li>
      <a href="companies-landing.html" className="btn_top company">
        For Companies
      </a>
    </li>
    <li>
      <a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">
        Sign In
      </a>
    </li>
  </ul>
  {/* /top_menu */}
  <a href="#menu" className="btn_mobile">
    <div className="hamburger hamburger--spin" id="hamburger">
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
  </a>
  <nav id="menu" className="main-menu">
    <ul>
      <li>
        <span>
          <a href="#0">Home</a>
        </span>
        <ul>
          <li>
            <a href="index.html">Home version 1</a>
          </li>
          <li>
            <a href="index-3.html">Home version 2</a>
          </li>
          <li>
            <a href="index-2.html">Home version 3 (GDPR)</a>
          </li>
        </ul>
      </li>
      <li>
        <span>
          <a href="#0">Reviews</a>
        </span>
        <ul>
          <li>
            <span>
              <a href="#0">Layouts</a>
            </span>
            <ul>
              <li>
                <a href="grid-listings-filterstop.html">Grid listings 1</a>
              </li>
              <li>
                <a href="grid-listings-filterscol.html">Grid listings 2</a>
              </li>
              <li>
                <a href="row-listings-filterscol.html">Row listings</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="reviews-page.html">Reviews page</a>
          </li>
          <li>
            <a href="write-review.html">Write a review</a>
          </li>
          <li>
            <a href="confirm.html">Confirm page</a>
          </li>
          <li>
            <a href="user-dashboard.html">User Dashboard</a>
          </li>
          <li>
            <a href="user-settings.html">User Settings</a>
          </li>
        </ul>
      </li>
      <li>
        <span>
          <a href="pricing.html">Pricing</a>
        </span>
      </li>
      <li>
        <span>
          <a href="#0">Pages</a>
        </span>
        <ul>
          <li>
            <a href="companies-landing.html">Compannies Landing Page</a>
          </li>
          <li>
            <a href="all-categories.html">Companies Categories Page</a>
          </li>
          <li>
            <a href="category-companies-listings-filterstop.html">
              Companies Listing Page
            </a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="register.html">Register</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="help.html">Help Section</a>
          </li>
          <li>
            <a href="faq.html">Faq Section</a>
          </li>
          <li>
            <a href="contacts.html">Contacts</a>
          </li>
          <li>
            <span>
              <a href="#0">Icon Packs</a>
            </span>
            <ul>
              <li>
                <a href="icon-pack-1.html">Icon pack 1</a>
              </li>
              <li>
                <a href="icon-pack-2.html">Icon pack 2</a>
              </li>
              <li>
                <a href="icon-pack-3.html">Icon pack 3</a>
              </li>
              <li>
                <a href="icon-pack-4.html">Icon pack 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="404.html">404 page</a>
          </li>
        </ul>
      </li>
      <li>
        <span>
          <a href="#0">Buy template</a>
        </span>
      </li>
      <li className="d-block d-sm-none">
        <span>
          <a href="#0" className="btn_top">
            Write a review
          </a>
        </span>
      </li>
    </ul>
  </nav>
</header>

        </>
    )
}