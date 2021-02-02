import React from 'react';

import NoImage from "../../assets/images/no_image.jpg";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config/api";
import { StyledActor } from "../../assets/styles/StyledActor";

const Actor = ({actor}) => {
  return(
    <StyledActor>
      <img
        src={
          actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
        }
        alt="actor thumb"
      />
      <span className="actor-name">{actor.name}</span>
      <span className="actor-character">{actor.character}</span>
    </StyledActor>
  )
}

export default Actor;