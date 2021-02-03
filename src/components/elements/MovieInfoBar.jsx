import React from 'react';
import PropTypes from 'prop-types';
import { calcTime, convertMoney } from  '../../utils/helpers';

import { StyledMovieInfoBar } from '../../assets/styles/StyledMovieInfoBar';
import FontAwesome from 'react-fontawesome';

const MovieInfoBar = ({ time, budget, revenue }) => {
  return(
    <StyledMovieInfoBar>
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x"/>
        <span className="movieinfobar-info">
          Running time: { calcTime(time)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x"/>
        <span className="movieinfobar-info">
          budget: { convertMoney(budget)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x"/>
        <span className="movieinfobar-info">
          Revenue: { convertMoney(revenue)}
        </span>
      </div>
    </div>
    </StyledMovieInfoBar>
  )
}

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default MovieInfoBar;