import React, { useContext, useEffect, useState } from "react";

import bg from "../../../images_new/img/banner.png";
import banner_1 from "../../../images_new/banner-img-1-1.jpg";
import banner_2 from "../../../images_new/banner-img-2.jpg";
import { ValueContext } from "../../Context/Context_Hook";
import { toast } from "react-toastify";
import axios from "axios";

const Checkout = () => {
  const context = useContext(ValueContext);
  let token = sessionStorage.getItem("token");
  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  let id = sessionStorage.getItem("id");
  const [orderData, setOrderdata] = useState("");
  const [paymentToken, setPaymentToken] = useState(null);
  const [urlLink, setUrlLink] = useState("");
  const [TransactionId, setTransactionId] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState("pending"); // Success or Failed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UserData, setUserData] = useState([]);

  // const product_data =context.api_cartitems
  const product_data = context.api_cartitems;
 

  const newArray = [];
  product_data?.map((item, index) => {
    newArray.push(item);
  });
  console.log("newarrya", newArray);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${url}/user`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });

        setUserData(res.data.data);
       

       

        console.log("object", res, );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (token) {
      fetchUserData();
    }
  }, [ token]);






  const handleplaceorder = async (e) => {
    e.preventDefault();
    console.log("888888888");
    try {
      const place_order = await axios.post(`${url}/order`, {
        userid: id,
        total_amount: context.total_sum,
        shipping_address: "noida",
        billing_address: "noida",
        product: newArray,
      });

      if (place_order.status === 200) {
        toast.success("Order placed successfully!", { autoClose: 3000 });
        // console.log('0000000', place_order)
        setOrderdata(place_order.data);
        setUrlLink(place_order.data.approve_link);

        if (place_order.data.approve_link) {
          window.open(place_order.data.approve_link, "_blank");
        }
      } else {
        console.error("Unexpected response:", place_order);
        toast.error("Order failed. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred. Please check the console.");
    }
  };

  useEffect(() => {
    if (urlLink) {
      const queryParams = new URL(urlLink);
      const paymentValue = queryParams.searchParams.get("token");
      console.log("paymentValue inside hook", paymentValue);
      setPaymentToken(paymentValue);
    }
  }, [urlLink]);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        setTransactionStatus("pending");
        setIsModalOpen(true);
        const res = await axios.get(`${url}/transaction/${paymentToken}`);

        // console.log("transaction id", res.data.data);
        setTransactionId(res.data.data);
        if (TransactionId?.status === "PAID") {
          setTransactionStatus("success");
        } else {
          setTransactionStatus("pending");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setTransactionStatus("failed"); 
        setIsModalOpen(true);
      }
    };
    if (paymentToken) {
      fetchTransactionData();
    }
  }, [paymentToken]);

  const closeModal = () => {
    setIsModalOpen(false);
    setTransactionStatus(null); 
  };

  console.log(
    " place data.......",
    context.api_cartitems,
    "fghj",
    product_data,
    "userid",
    orderData,
    "paymenttoken",
    paymentToken
,'jjjjjjjjjjjjjjjj',TransactionId , 'user4444',UserData );
  return (
    <>
      <section
        className="banner mt-48"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${bg})`,
          backgroundPosition: `center`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2>Carrito de compra</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Hogar</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Carrito de compra
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <div className="banner-img-1">
                  <svg
                    width="260"
                    height="260"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img src={banner_1} alt="banner" />
                </div>
                <div className="banner-img-2">
                  <svg
                    width="320"
                    height="320"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img src={banner_2} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section className="gap">
        <div className="container">
          <form
            className="checkout-meta donate-page"
            onSubmit={handleplaceorder}
          >
            <div className="row">
              <div className="col-lg-8">
                <h3>Detalles de facturación</h3>
                <div className="col-lg-12">
                  <input
                    type="text"
                    required={true}
                    className="input-text "
                    name=""
                    value={UserData.owner_name}
                    placeholder="Nombre completo"
                  />
                  <input
                    type="tel"
                    required={true}
                    className="input-text "
                    name=""
                    value={UserData.phone}
                    placeholder="Número de teléfono"
                  />
                  <input
                    type="text"
                    required={true}
                    className="input-text "
                    name=""
                    placeholder="Nº casa/nº piso "
                  />
                  <input
                    type="text"
                    required={true}
                    className="input-text "
                    name=""
                    placeholder="Localidad"
                  />
                  <input
                    type="text"
                    required={true}
                    className="input-text "
                    name=""
                    placeholder="Código Postal"
                  />
                  <input
                    type="text"
                    required={true}
                    className="input-text "
                    name=""
                    placeholder="Ciudad"
                  />
                  <input
                    type="text"
                    required={true}
                    className="input-text "
                    name=""
                    placeholder="País"
                  />

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
                      <input
                        type="radio"
                        id="Create"
                        name="Create"
                        value="Create"
                      />
                      <label for="Create">
                      Crear una cuenta para usarla más adelante
                      </label>
                    </div>
                    <div className="d-flex">
                      <input
                        type="radio"
                        id="ShipAddress"
                        name="Create"
                        value="ShipAddress"
                      />
                      <label for="ShipAddress">Enviar a la misma dirección</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="woocommerce-additional-fields">
                  <h3>Nota de pedido</h3>
                  <textarea
                    name="order_comments"
                    className="input-text "
                    placeholder="Nota de pedido"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row mt-lg-5">
              <div className="col-lg-6">
                <div className="cart_totals cart-Total">
                  <h4>Total del carrito</h4>
                  <table className="shop_table_responsive">
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Total parcial:</th>
                        <td>
                          <span className="woocommerce-Price-amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {context.total_sum?.toFixed(2)}
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="Shipping">
                        <th>Envío:</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                          gratis
                          </span>
                        </td>
                      </tr>
                      <tr className="Total">
                        <th>Total:</th>
                        <td>
                          <span className="woocommerce-Price-amount">
                            <bdi>
                              <span>$</span>
                              {context.total_sum?.toFixed(2)}
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
                  <h3>Método de pago</h3>
                  <ul>
                    <li>
                      <input
                        type="radio"
                        id="PayPal"
                        name="Bank_Payment"
                        value="Check_Payment"
                      />
                      <label for="PayPal">PayPal</label>
                    </li>
                  </ul>
                  <button type="submit" className="button">
                  Realizar pedido
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        
        {isModalOpen && (
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                {transactionStatus === "pending" && (
                  <div>
                    <h2>Transaction Pending</h2>
                    <p>Your transaction is being processed. Please wait...</p>
                  </div>
                )}
                {transactionStatus === "success" && (
                  <div>
                    <h2>Transaction Successful</h2>
                    <p>Your transaction has been completed successfully.</p>
                  </div>
                )}
                {transactionStatus === "failed" && (
                  <div>
                    <h2>Transaction Failed</h2>
                    <p>Something went wrong. Please try again later.</p>
                  </div>
                )}
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Checkout;
