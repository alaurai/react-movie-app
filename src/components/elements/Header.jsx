import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../../assets/images/reactMovie_logo.png';
import TMDBLobo from '../../assets/images/tmdb_logo.svg';
import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../../assets/styles/StyledHeader';


const Header = () => {
  return(
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
        </Link>
        <StyledTMDBLogo src={TMDBLobo} alt="tmdb-logo"/>
      </div>
    </StyledHeader>
  )
}

export default Header;