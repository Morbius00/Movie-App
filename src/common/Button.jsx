import React from 'react';
import { Link } from 'react-router-dom';

const RedButton = ({ children, className, onClick, disabled, to }) => {
  return (
    <Link to={to} className="inline-block">
      <button
        disabled={disabled}
        onClick={onClick}
        className={`text-center rounded-xl font-semibold px-[0.8vw] py-[0.5vw] hover:bg-red-800 bg-red-600 text-white ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default RedButton;
