import React from 'react';
import {useMatch, Link, useResolvedPath} from 'react-router-dom';

import './navbarlink.scss';

const NavbarLink = ({to, children}) => {
  const resolvedPath = useResolvedPath(to);
  const isMatch = useMatch({path: resolvedPath.pathname, end: true});

  console.log(resolvedPath);
  console.log(isMatch);

  return (
    <Link
      to={to}
      className={`text-dark text-decoration-none btn ${
        isMatch && 'btn-primary text-white'
      }`}
      type="button"
    >
      <h6 className="d-flex align-items-center gap-2 mb-0 p-1">{children}</h6>
    </Link>
  );
};

export default NavbarLink;
