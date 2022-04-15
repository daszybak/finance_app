import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const renderedNavbarLinks = [
    'home',
    'news',
    'watchlist',
    'calculator',
    'settings',
  ].map((link) => {
    return (
      <Link to={link} className="text-decoration-none">
        {link.slice(0, 1).toLocaleUpperCase() + link.slice(1)}
      </Link>
    );
  });

  return (
    <nav className="d-flex flex-column justify-content-sm-between">
      {renderedNavbarLinks}
    </nav>
  );
};

export default Navbar;
