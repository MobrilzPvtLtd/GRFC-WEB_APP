import React, { useContext, useEffect, useState } from "react";
import { ValueContext } from "../../Context/Context_Hook";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const context = useContext(ValueContext);
  const [TransactionId, setTransactionId] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState("pending"); // Success or Failed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = process.env.REACT_APP_BACKEND_BASE_URL;
  const navigate = useNavigate();

  const localpaytmtoken = localStorage.getItem("transactiontoken");

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        setTransactionStatus("pending");
        setIsModalOpen(true);
        const res = await axios.get(`${url}/transaction/${localpaytmtoken}`);

        // console.log("transaction id", res.data.data);
        setTransactionId(res.data.data);
        if (TransactionId?.status === "PAID") {
          setTransactionStatus("success");
          // navigate('/')
        } else if (TransactionId?.status === "FAILED") {
          setTransactionStatus("failed");
          //  navigate('/about-us')
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setTransactionStatus("failed");
        setIsModalOpen(true);
      }
    };
    if (localpaytmtoken) {
      fetchTransactionData();
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setTransactionStatus(null);
  };

  console.log(
    "transaction daata",
    TransactionId,
    "paytm token",
    context.paymentToken,
    "vvvv",
    transactionStatus,
    "local",
    localpaytmtoken,
    "trans000",
    TransactionId[0].id
  );

  return (
    <>
      <div className="mt-64">
        {transactionStatus === "pending" && (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div
              className="card shadow-lg p-4 text-center"
              style={{ maxWidth: "400px" }}
            >
              <div className="card-body">
                <h2 className="text-warning">Transaction Pending</h2>
                <h6>Your Transaction ID:{TransactionId[0]?.id}</h6>
                <p className="mt-3">Your transaction has been Pending.</p>
              </div>
            </div>
          </div>
        )}
        {transactionStatus === "success" && (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div
              className="card shadow-lg p-4 text-center"
              style={{ maxWidth: "400px" }}
            >
              <div className="card-body">
                <h2 className="text-success">Transaction Successful</h2>
                <h6>Your Transaction ID:{TransactionId[0]?.id}</h6>
                <p className="mt-3">
                  Your transaction has been completed successfully.
                </p>
              </div>
            </div>
          </div>
        )}
        {transactionStatus === "failed" && (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div
              className="card shadow-lg p-4 text-center"
              style={{ maxWidth: "400px" }}
            >
              <div className="card-body">
                <h2 className="text-danger">Transaction Failed</h2>
                <h6>Your Transaction ID:{TransactionId[0]?.id}</h6>
                <p className="mt-3">Your transaction has been Failed.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderConfirmation;
