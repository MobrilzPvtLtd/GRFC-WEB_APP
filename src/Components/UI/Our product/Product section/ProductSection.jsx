import React from 'react';
import product from "../../../../images_new/product1-min-305x350 (1)vngearhbwfjevaibhwefnj.png"
import product2 from "../../../../images_new/p53x73.png"

const ProductSection = () => {
  return (
    <section className="gap products-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="sidebar">
              <h3>Category</h3>
              <div className="boder-bar"></div>
              <ul className="category">
                <li>
                  <a href="#">Cat Supplies<span>32</span></a>
                </li>
                <li>
                  <a href="#">Dog Supplies<span>12</span></a>
                </li>
                <li>
                  <a href="#">Animal Feed<span>14</span></a>
                </li>
                <li className="end">
                  <a href="#">Accessories<span>32</span></a>
                </li>
              </ul>
            </div>
            <div className="sidebar">
              <h3>Price range</h3>
              <div className="boder-bar"></div>
              <div className="wrapper">
                <fieldset className="filter-price">
                  <div className="price-wrap">
                    <span className="price-title">Price</span>
                    <div className="price-wrap-1">
                      <input id="one" />
                      <label htmlFor="one">$</label>
                    </div>
                    <div className="price-wrap_line">-</div>
                    <div className="price-wrap-2">
                      <input id="two" />
                      <label htmlFor="two">$</label>
                    </div>
                  </div>
                  <div className="price-field">
                    <input type="range" min="50" max="150" value="50" id="lower" />
                    <input type="range" min="50" max="150" value="150" id="upper" />
                  </div>
                  <button className="w-100 button">Filter</button>
                </fieldset>
              </div>
            </div>
            <div className="sidebar">
              <h3>Top Products</h3>
              <div className="boder-bar"></div>
              <ul className="top-products">
                {[...Array(3)].map((_, index) => (
                  <li key={index}>
                    <img src={product2} alt="top-products" />
                    <div>
                      <a href="#">Procan Adult Dog Food</a>
                      <span>$32.00</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="items-number">
              <span>Items 1-25 of 6133</span>
              <div className="d-flex align-items-center">
                <span>Sort By</span>
                <select className="nice-select Advice">
                  <option>Recently Added</option>
                  <option>Services 1</option>
                  <option>Services 2</option>
                  <option>Services 3</option>
                  <option>Services 4</option>
                </select>
              </div>
            </div>
            <div className="row">
              {[...Array(9)].map((_, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="healthy-product">
                    <div className="healthy-product-img">
                      <img
                        src={product}
                        alt="food"
                      />
                      <ul className="star">
                        {[...Array(5)].map((_, starIndex) => (
                          <li key={starIndex}><i className="fa-solid fa-star"></i></li>
                        ))}
                      </ul>
                      <div className="add-to-cart">
                        <a href="#">Add to Cart</a>
                        <a href="#" className="heart-wishlist">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <span>Animal Feed</span>
                    <a href="product-details.html">Procan Adult Dog Food</a>
                    <h6>$32.00</h6>
                    {index % 2 === 1 && (
                      <h4>-24%</h4>
                    )}
                    {index % 2 === 1 && (
                      <h6><del>$32.00</del>$22.00</h6>
                    )}
                  </div>
                </div>
              ))}
              <ul className="pagination m-auto">
                <li className="prev">
                  <a href="#">
                    <i className="fa-solid fa-arrow-left"></i>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">......</a></li>
                <li><a href="#">18</a></li>
                <li className="next">
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
