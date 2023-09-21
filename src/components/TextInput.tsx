import React from 'react';
import styled from 'styled-components';
import { Box } from '../styles/sharedStyles';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 5.6rem 0;
  max-width: 960px;
`;

const IntersectingLabel = styled.label`
  position: absolute;
  font-size: 0.8rem;
  margin-top: -0.5rem;
  margin-left: 0.5rem;
  z-index: 10;
  background-color: white;
`;

export const TextInput: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <Box>
          <IntersectingLabel htmlFor="text">NAME</IntersectingLabel>
          <input style={{ paddingTop: '8px' }} type="text" id="text" />
        </Box>
      </StyledContainer>
    </>
  );
};
