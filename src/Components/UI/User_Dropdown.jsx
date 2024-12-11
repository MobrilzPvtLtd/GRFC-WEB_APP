import React, { useRef, useState, useEffect } from "react";
import userlogo from "../../assets/images_new/user_logo24.png";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = sessionStorage.getItem("token");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for outside click when the dropdown is open
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="userdropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="userdropdown-btn">
        <img src={userlogo} alt="User" className="user-logo mt-1" />
      </button>
      {isOpen && (
        token ? (
          <div className="userdropdown-menu border-0">
            <Link to="/userprofile" onClick={toggleDropdown}>Edit User</Link>
            <Link to="/forget" onClick={toggleDropdown}>Reset Password</Link>
            <Link to="/"  onClick={() => {
              // Handle sign-out here (if required)
              console.log("Sign Out");
              sessionStorage.removeItem("token"); 
              localStorage.removeItem("User_info");
            //   window.location.reload();
              // Example of sign-out logic
            }}>
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="userdropdown-menu border-0">
            <Link onClick={toggleDropdown} to="/login-Register">Login/Register</Link>
          </div>
        )
      )}
    </div>
  );
};

export default UserDropdown;
