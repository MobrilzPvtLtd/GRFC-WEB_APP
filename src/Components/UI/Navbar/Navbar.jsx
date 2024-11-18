import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ValueContext } from "../../Context/Context_Hook";
import { useTranslation } from "react-i18next";
// import './i18next'

const Navbar = ({ getVisibity }) => {
  const [visible, setVisible] = useState(true);
  const [cartNumber, setCartNumber] = useState(0);
  const context = useContext(ValueContext);

  const handleVisible = () => {
    setVisible(!visible);
    getVisibity(visible);
    console.log("visibiility check", visible);
  };
  let token = localStorage.getItem("token");

  const lngs = [
    { code: "en", native: "English" },
    { code: "sp", native: "Spanish" },
  ];

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <div className="relative w-full bg-white">
      <header className="fixed top-0">
        <div class="top-bar bg-white">
          <div class="container">
            <div class="top-bar-slid">
              <div>
                <div class="phone-data">
                  <div class="phone">
                    <i>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" // Convert xmlns:xlink to xmlnsXlink
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        width="512"
                        height="512"
                        style={{ enableBackground: "new 0 0 512 512" }} // Inline styles as an object
                      >
                        <path
                          d="M0,81v350h512V81H0z M456.952,111L256,286.104L55.047,111H456.952z M30,128.967l134.031,116.789L30,379.787V128.967z
                   M51.213,401l135.489-135.489L256,325.896l69.298-60.384L460.787,401H51.213z M482,379.788L347.969,245.756L482,128.967V379.788z"
                        ></path>
                      </svg>
                    </i>
                    <a href="mallto:username@domain.com">username@domain.com</a>
                  </div>
                  <div class="phone d-flax align-items-center">
                    <i>
                      <svg
                        height="112"
                        viewBox="0 0 24 24"
                        width="112"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          clip-rule="evenodd"
                          fill="rgb(255255,255)"
                          fill-rule="evenodd"
                        >
                          <path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z"></path>
                          <path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z"></path>
                          <path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z"></path>
                        </g>
                      </svg>
                    </i>
                    <a class="me-3" href="callto:+02101283492">
                      +021 01283492
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="time">
                  <div class="ordering">
                    <a href="#">Ordering</a>
                    <div class="line"></div>
                    <a href="#">Shipping</a>
                    <div class="line"></div>
                    <a href="#">Returns</a>
                    <div class="line"></div>

                  
                        <select
                          defaultValue={"sp"}
                          className="bg-slate-500"
                          
                        >  {lngs.map((lng, i) => {
                          const { code, native } = lng;
                          return (
                          <option value={code} key={code}  onChange={() => handleTrans(code)}>{native}</option> );
                        })}
                        </select>
                     
                  </div>
                  {token ? (
                    <div class="login">
                      <button
                        className="px-3 mx-2 flex justify-center items-center py-2 text-black transition-transform hover:scale-110"
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("User_info");
                          window.location.reload();
                        }}
                      >
                        {" "}
                        <i class="fa-solid fa-user"></i> Logout
                      </button>
                    </div>
                  ) : (
                    <div class="login">
                      <i class="fa-solid fa-user"></i>
                      <Link to="/login-Register">Login / Register</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="bottom-bar">
            <a href="index.html">
              <img
                class="logo001"
                src="assets/images_new/Idenditad-Visual-Grupo-Felino-Canino-3.png"
                alt="logo"
              />
            </a>
            <nav class="navbar">
              <ul class="navbar-links">
                <li class="navbar-dropdown ">
                  <Link to="/">
                    <i>
                      {/* <!-- <img alt="home" src="assets/img/home.png"> --> */}
                    </i>
                    home
                  </Link>
                  {/* <!-- <div class="dropdown">
                        <a href="index.html">home 1</a>
                        <a href="index-2.html">home 2</a>
                        <a href="index-3.html">home 3</a> -->
                      <!-- </div> --> */}
                </li>
                <li class="navbar-dropdown">
                  <Link to="/about-us">About</Link>
                </li>
                <li class="navbar-dropdown ">
                  <Link to="/services">
                    <i></i>services
                  </Link>
                  {/* <!-- <div class="dropdown">
                        <a href="services.html">services</a>
                        <a href="service-details.html">service details</a>
                      </div> --> */}
                </li>
                {/* <!-- <li class="navbar-dropdown menu-item-children">
                      <a href="javascript:void(0)">pages</a>
                      <div class="dropdown">
                        <a href="team-details.html">team details</a>
                        <a href="how-we-works.html">how we works</a>
                        <a href="history.html">history</a>
                        <a href="pricing-packages.html">pricing packages</a>
                        <a href="photo-gallery.html">photo gallery</a>
                        <a href="login.html">login</a>
                      </div>
                    </li> --> */}
                <li class="navbar-dropdown ">
                  <Link to="/our-products">Products</Link>
                  {/* <!-- <div class="dropdown">
                        <a href="our-products.html">our products</a>
                        <a href="product-details.html">product details</a>
                        <a href="shop-cart.html">shop cart</a>
                        <a href="cart-checkout.html">cart checkout</a>
                      </div> --> */}
                </li>
                {/* <!-- <li class="navbar-dropdown menu-item-children">
                      <a href="javascript:void(0)">News</a>
                      <div class="dropdown">
                        <a href="our-blog.html">our blog</a>
                        <a href="blog-details.html">blog details</a>
                      </div>
                    </li> --> */}
                <li class="navbar-dropdown">
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>
            <div class="menu-end">
              <div class="bar-menu">
                <i class="fa-solid fa-bars"></i>
              </div>
              <div class="header-search-button search-box-outer">
                <a href="javascript:void(0)" class="search-btn">
                  <svg
                    height="512"
                    viewBox="0 0 24 24"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="_12" data-name="12">
                      <path d="m21.71 20.29-2.83-2.82a9.52 9.52 0 1 0 -1.41 1.41l2.82 2.83a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zm-17.71-8.79a7.5 7.5 0 1 1 7.5 7.5 7.5 7.5 0 0 1 -7.5-7.5z"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="line"></div>
              <a href="#">
                <i class="fa-regular fa-heart"></i>
              </a>
              <div onClick={handleVisible} class="hamburger-icon">
                <div class="donation">
                  <Link to="JavaScript:void(0)" class="mx-0 relative" id="show">
                    <svg
                      enable-background="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path>
                      </g>
                    </svg>
                    <span className="top-[-1rem] right-[-1.3rem] bg-black rounded-[50%] w-7 flex justify-center items-center text-white p-1 text-xs absolute">
                      {context.Cart_num}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mobile-nav hmburger-menu"
          id="mobile-nav"
          style={{ display: "block" }}
        >
          <div class="res-log">
            <a href="index.html">
              <img src="assets/img/logo-w.png" alt="Responsive Logo" />
            </a>
          </div>
          <ul>
            <li class="menu-item-has-children">
              <a href="JavaScript:void(0)">Home</a>
              <ul class="sub-menu">
                <li>
                  <a href="index.html">home 1</a>
                </li>
                <li>
                  <a href="index-2.html">home 2</a>
                </li>
                <li>
                  <a href="index-3.html">home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>

            <li class="menu-item-has-children">
              <a href="JavaScript:void(0)">Services</a>

              <ul class="sub-menu">
                <li>
                  <a href="services.html">services</a>
                </li>
                <li>
                  <a href="service-details.html">service details</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="JavaScript:void(0)">pages</a>
              <ul class="sub-menu">
                <li>
                  <a href="team-details.html">team details</a>
                </li>
                <li>
                  <a href="how-we-works.html">how we works</a>
                </li>
                <li>
                  <a href="history.html">history</a>
                </li>
                <li>
                  <a href="pricing-packages.html">pricing packages</a>
                </li>
                <li>
                  <a href="photo-gallery.html">photo gallery</a>
                </li>
                <li>
                  <a href="login.html">login</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="JavaScript:void(0)">shop</a>

              <ul class="sub-menu">
                <li>
                  <a href="our-products.html">our products</a>
                </li>
                <li>
                  <a href="product-details.html">product details</a>
                </li>
                <li>
                  <a href="shop-cart.html">shop cart</a>
                </li>
                <li>
                  <a href="cart-checkout.html">cart checkout</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a href="JavaScript:void(0)">News</a>

              <ul class="sub-menu">
                <li>
                  <a href="our-blog.html">our blog</a>
                </li>
                <li>
                  <a href="blog-details.html">blog details</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contact.html">contacts</a>
            </li>
          </ul>

          <ul class="social-icon">
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>

          <a href="JavaScript:void(0)" id="res-cross"></a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
