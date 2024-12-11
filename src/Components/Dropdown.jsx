import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect clicks outside the dropdown

  // Function to toggle the dropdown open/close
  const handleClick = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for outside click when the dropdown is open
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const formatName = (name) => {
    return name.replace(/\s+/g, '_'); // Replace all spaces with underscores
  };
  
  return (
    <li className="navbar-dropdown mx-4" ref={dropdownRef}>
      <Link 
        to="#" 
        className="dropdown-toggle" 
        onClick={handleClick}
      >
        {label}
        {/* Arrow icon that rotates on open/close */}
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>
            {/* &#9660; */}
            </span> {/* Down Arrow (▼) */}
      </Link>

      {isOpen && (
        <ul className="dropdown-menu">
          {items?.map((item, index) => (
            <li key={index} >
              <Link onClick={handleClick} className="px-4 dropdown-item" to={`/services/${formatName(item.name)}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
