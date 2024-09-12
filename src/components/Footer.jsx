import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary2 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} New Bank. All Rights Reserved.
    </footer>
  );
};

export default Footer;
