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
        
        
        const res = await axios.get(`${url}/transaction/${localpaytmtoken}`);

        // console.log("transaction id", res.data.data);
        setTransactionId(res.data.data[0]);
        if (TransactionId?.status === "PAID") {
          setTransactionStatus("success");
          // navigate('/')
        } else if (TransactionId?.status === "FAILED") {
          setTransactionStatus("failed");
          //  navigate('/about-us')
        }else {
          setTransactionStatus("pending");
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
    return () => {
      localStorage.removeItem("transactiontoken");
      console.log("transactiontoken removed from localStorage");
    };
  }, []);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setTransactionStatus(null);
  // };

  console.log(
    "transaction daata",
    TransactionId,
    
    "vvvv",
    transactionStatus,
    "local",
    localpaytmtoken,
    "trans000",
    TransactionId
  );

  return (
    <>
      <div className="mt-48 mb-5">
        {transactionStatus === "pending" && (
          <div className="d-flex justify-content-center align-items-center ">
            <div
              className="card shadow-lg p-4 text-center"
              style={{ maxWidth: "600px" }}
            >
              <div className="card-body">
                <h4 className="text-warning">Transaction Pending</h4>
                <h6>Your Transaction ID:{TransactionId?.id || "Loading..."}</h6>
                <p className="mt-3">Your transaction has been Pending.</p>
              </div>
            </div>
          </div>
        )}
        {transactionStatus === "success" && (
          <div className="d-flex justify-content-center align-items-center ">
            <div
              className="card shadow-lg p-4 text-center"
              style={{ maxWidth: "600px" }}
            >
              <div className="card-body">
                <h4 className="text-success">Transaction Successful</h4>
                <h6>Your Transaction ID:{TransactionId?.id || "Loading..."}</h6>
                <p className="mt-3">
                  Your transaction has been completed successfully.
                </p>
              </div>
            </div>
          </div>
        )}
        {transactionStatus === "failed" && (
          <div className="d-flex justify-content-center align-items-center ">
            <div
              className="card shadow-lg p-4 text-center"
              style={{ maxWidth: "600px" }}
            >
              <div className="card-body">
                <h4 className="text-danger">Transaction Failed</h4>
                <h6>Your Transaction ID:{TransactionId?.id || "Loading..."}</h6>
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
