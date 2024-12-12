import React, { useContext } from 'react'

import bg from "../../../images_new/img/banner.png"
import banner_1 from "../../../images_new/banner-img-1-1.jpg"
import banner_2 from "../../../images_new/banner-img-2.jpg"
import { ValueContext } from '../../Context/Context_Hook'

const Checkout = () => {
    const context = useContext(ValueContext);
  return (
    <>
   <section className="banner mt-48"  style={{ backgroundColor: '#fff', backgroundImage: `url(${bg})`,  backgroundPosition:`center` }} >
       <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="banner-text">
                    <h2>Cart Checkout</h2>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Cart Checkout</li>
                    </ol>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="banner-img">
                    <div className="banner-img-1">
                        <svg width="260" height="260" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fa441d"></path>
                        </svg>
                        <img src={banner_1} alt="banner"/>
                    </div>
                    <div className="banner-img-2">
                        <svg width="320" height="320" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fa441d"></path>
                        </svg>
                        <img src={banner_2} alt="banner"/>
                    </div>
                </div>
            </div>
        </div>
         </div>
        {/* <img src="assets/img/hero-shaps-1.png" alt="hero-shaps" className="img-2"/>
        <img src="assets/img/hero-shaps-1.png" alt="hero-shaps" className="img-4"/> */}
  </section>
  <section className="gap"> 
  <div className="container">
      <form className="checkout-meta donate-page">
          <div className="row">
              <div className="col-lg-8">
                  <h3>Billing details</h3>
                      <div className="col-lg-12">
                          <input type="text" className="input-text " name="" placeholder="Full Name"/>
                          <input type="tele" className="input-text " name=""  placeholder="Phone Number"/>
                          <input type="text" className="input-text " name="" placeholder="House No./Flat No. "/>
                          <input type="text" className="input-text " name="" placeholder="Locality"/>
                          <input type="text" className="input-text " name="" placeholder="Postal Code"/>
                          <input type="text" className="input-text " name="" placeholder="City "/>
                          <input type="text" className="input-text " name="" placeholder="Country "/>
                          
                          {/* <div className="row">
                          <div className="col-lg-6">
                              <select name="billing_country" className="nice-select Advice city">
                                  <option>City</option>
                                  <option>Select Topic 1</option>
                                  <option>Select Topic 2</option>
                                  <option>Select Topic 3</option>
                                  <option>Select Topic 4</option>
                              </select>
                          </div>
                          <div className="col-lg-6">
                              <select name="billing_country" className="nice-select Advice state province">
                                  <option>State / Province</option>
                                  <option>Select Topic 1</option>
                                  <option>Select Topic 2</option>
                                  <option>Select Topic 3</option>
                                  <option>Select Topic 4</option>
                              </select>
                          </div>
                          <div className="col-lg-6">
                              <input type="text" name="Postal_Code" placeholder="Postal Code"/>
                          </div>
                          <div className="col-lg-6">
                              <input type="tel" className="input-text " name="billing_phone"  placeholder="Phone"/>
                          </div>
                          </div> */}
                          {/* <input type="text" name="Address" placeholder="Address"/> */}
                          <div className="ship-address">
                              <div className="d-flex">
                              <input type="radio" id="Create" name="Create" value="Create"/>
                              <label for="Create">
                                  Create an account for later use
                              </label>
                              </div>
                              <div className="d-flex">
                              <input type="radio" id="ShipAddress" name="Create" value="ShipAddress"/>
                              <label for="ShipAddress">
                                      Ship to same Address
                              </label>
                              </div>
                          </div>
                      </div>
              </div>
              <div className="col-lg-4">
                  <div className="woocommerce-additional-fields">
                      <h3>Order Note</h3>
                      <textarea name="order_comments" className="input-text " placeholder="Order Note"></textarea>
                  </div>
              </div>
          </div>
          <div className="row mt-lg-5">
              <div className="col-lg-6">
                      <div className="cart_totals cart-Total">
                          <h4>Cart Total</h4>
                          <table className="shop_table_responsive">
                              <tbody>
                                  <tr className="cart-subtotal">
                                      <th>Subtotal:</th>
                                      <td>
                                          <span className="woocommerce-Price-amount">
                                          <bdi>
                                              <span className="woocommerce-Price-currencySymbol">$</span>{context.total_sum?.toFixed(2)}
                                          </bdi>
                                          </span>
                                      </td>
                                  </tr>
                                  <tr className="Shipping">
                                      <th>Shipping:</th>
                                      <td>
                                          <span className="woocommerce-Price-amount amount">
                                              free
                                          </span>
                                       </td>
                                  </tr>
                                  <tr className="Total">
                                      <th>Total:</th>
                                      <td>
                                          <span className="woocommerce-Price-amount">
                                          <bdi>
                                              <span>$</span>{context.total_sum?.toFixed(2)}
                                          </bdi>
                                          </span>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
              </div>
              <div className="col-lg-6">
                  <div className="checkout-side">
                      <h3>Payment Method</h3>
                      <ul>
                         
                          <li>
                              <input type="radio" id="PayPal" name="Bank_Payment" value="Check_Payment"/>
                              <label for="PayPal">
                                      PayPal
                              </label>
                          </li>
                      </ul>
                      <button type="submit" className="button">Place Order</button>
                  </div>
              </div>
          </div>
      </form>
  </div>
</section>
    </>





  

    
    
  )
}

export default Checkout

