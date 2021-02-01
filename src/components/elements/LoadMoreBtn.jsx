import React from 'react';

import { StyledLoadMoreBtn } from '../../assets/styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({ text, callback}) => {
  return(
   <StyledLoadMoreBtn type="button" onClick={callback}>
     {text}
   </StyledLoadMoreBtn>
  )
}

export default LoadMoreBtn;