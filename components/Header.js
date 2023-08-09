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
          <Link href="/Home">Home</Link>
        </span>
      </li>
      <li>
        <span>
      <Link href="/school">School</Link>
      </span>
      </li>
      <li>
        <span>
        <Link href="/contacts">Contacts</Link>
        </span>
      </li>
      <li>
        <span>
        <Link href="/login">Login</Link>
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