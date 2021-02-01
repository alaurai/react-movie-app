import React from 'react';

import { StyledMovieThumb } from '../../assets/styles/StyledMovieThumb';

const MovieThumb = ({image, movieId, clickable}) => {
  return(
    <StyledMovieThumb>
      {clickable ? (
        <img className="clickable" src={image} alt="movie thumb"/>
      ):(
        <img src={image} alt="movie thumb"/>
      )
      }
    </StyledMovieThumb>
  )
}

export default MovieThumb;