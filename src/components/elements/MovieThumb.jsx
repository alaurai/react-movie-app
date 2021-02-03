import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledMovieThumb } from '../../assets/styles/StyledMovieThumb';

const MovieThumb = ({image, movieId, clickable}) => {
  return(
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt="movie thumb"/>
        </Link>
      ):(
        <img src={image} alt="movie thumb"/>
      )
      }
    </StyledMovieThumb>
  )
}
MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default MovieThumb;