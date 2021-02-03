import React from 'react';
import { Link } from '@reach/router';

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

export default MovieThumb;