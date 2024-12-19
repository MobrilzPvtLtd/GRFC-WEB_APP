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
    const navigate = useNavigate()
  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        setTransactionStatus("pending");
        setIsModalOpen(true);
        const res = await axios.get(`${url}/transaction/${context.paymentToken}`);

        // console.log("transaction id", res.data.data);
        setTransactionId(res.data.data);
        if (TransactionId?.status === "PAID") {
          setTransactionStatus("success");
          // navigate('/')

        } else if(TransactionId?.status === "FAILED") {
          setTransactionStatus("failed");
          //  navigate('/about-us')
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setTransactionStatus("failed"); 
        setIsModalOpen(true);
      }
    };
    if(context.paymentToken) {
      fetchTransactionData();
    }
  }, [context.paymentToken]);
  const closeModal = () => {
    setIsModalOpen(false);
    setTransactionStatus(null); 
  };

  console.log('transaction daata',TransactionId , 'paytm token',context.paymentToken , 'vvvv', transactionStatus)

  return (
    <>
      <div className="mt-64 mx-auto">
        <h3>Thank You</h3>

        <div>
          <h2 className="text-success">Transaction Successful</h2>
          <p>Your transaction has been completed successfully.</p>
        </div>
      </div>
       {/* {isModalOpen && (
          product?token=5E019378CM981124E&PayerID=4JZJFCGZ73L5A
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
        )} */}
    </>
  );
};

export default OrderConfirmation;
