import React, { useState } from 'react'

const MainCart = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          sku: "11F4278",
          name: "Men Black T-Shirt",
          price: 110.0,
          originalPrice: 1245.69,
          quantity: 1,
          image: "https://via.placeholder.com/71x83",
        },
        {
          id: 2,
          sku: "11F4278",
          name: "Men Black T-Shirt",
          price: 110.0,
          originalPrice: 1245.69,
          quantity: 1,
          image: "https://via.placeholder.com/71x83",
        },
      ]);
    
      // Calculate subtotal
      const subtotal = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    
      return (
        <section className="gap">
          <div className="container">
            <div className="row">
              <form className="woocommerce-cart-form">
                <div style={{ overflowX: "auto", overflowY: "hidden" }}>
                  <table className="shop_table table-responsive">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={product.id}>
                          <td className="product-remove">
                            <a href="#">
                              <i className="fa-solid fa-x"></i>
                            </a>
                          </td>
                          <td className="product-name">
                            <img src={product.image} alt="Product" />
                            <div>
                              <span>Sku: {product.sku}</span>
                              <a href="#">{product.name}</a>
                            </div>
                          </td>
                          <td className="product-price">
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                {product.price.toFixed(2)}
                              </bdi>
                              <del>${product.originalPrice.toFixed(2)}</del>
                            </span>
                          </td>
                          <td className="product-quantity">
                            <input
                              type="number"
                              className="input-text"
                              min="0"
                              value={product.quantity}
                              onChange={(e) =>
                                setProducts(
                                  products.map((p, idx) =>
                                    idx === index
                                      ? { ...p, quantity: e.target.value }
                                      : p
                                  )
                                )
                              }
                            />
                          </td>
                          <td className="product-subtotal">
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                {(product.price * product.quantity).toFixed(2)}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row mt-lg-5">
                  <div className="col-lg-5">
                    <div className="coupon-area">
                      <h3>Discount</h3>
                      <p>Enter a coupon code below to apply it</p>
                      <div className="coupon">
                        <input
                          type="text"
                          name="coupon_code"
                          className="input-text"
                          placeholder="Coupon code"
                        />
                        <button type="submit" className="button" name="apply_coupon">
                          Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="cart_totals">
                      <h4>Payment Total</h4>
                      <table className="shop_table_responsive">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Subtotal:</th>
                            <td>
                              <span className="woocommerce-Price-amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  {subtotal.toFixed(2)}
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
                                  <span>$</span>
                                  {subtotal.toFixed(2)}
                                </bdi>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="wc-proceed-to-checkout">
                      <a href="#" className="button">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
  )
}

export default MainCart
