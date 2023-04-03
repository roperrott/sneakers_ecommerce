import React from 'react';

const HamburgerIcon = () => {
  return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 xs:invisible my-5"
        fill="grey"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="square"
            strokeLinejoin="square"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
        />
        </svg>
    
  );
};

export default HamburgerIcon;