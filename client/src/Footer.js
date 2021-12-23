import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <nav className="footer">
        <a href="https://github.com/RobWilliams0615">GitHub</a>
        <a href="https://www.linkedin.com/in/robwilliamsdev">LinkedIn</a>
        <Link to="">Instagram</Link>
      </nav>
    </div>
  );
};

export default Footer;
