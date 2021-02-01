import React from 'react';

import{ StyledGrid, StyledGridContent } from '../../assets/styles/StyledGrid';

const Grid = ({header, children }) => {
  return(
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>
        {children}
      </StyledGridContent>
    </StyledGrid>
  )
}

export default Grid;