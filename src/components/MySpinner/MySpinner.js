import React from 'react';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class MySpinner extends React.PureComponent {
  render() {
    return (
      <StyledSpinnerWrapper>
        <Spinner size="64px" color="#00aa00" gap={4} />
      </StyledSpinnerWrapper>
    )
  }
}

export default MySpinner;
