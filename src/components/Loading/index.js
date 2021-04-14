import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const area = { xs: '20px', sm: '30px', lg: '70px' };
const border = { xs: '2px', sm: '3px', lg: '6px' };
const height = { xs: '30px', sm: '60px', lg: '150px' };
const top = { xs: '5px', sm: '15px', lg: '35px' };
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  animation: ${spin} 0.55s linear infinite;
  ${({ size }) =>
    css`
      margin-top: ${top[size] || '30px'};
      margin-bottom: ${top[size] || '30px'};
      width: ${area[size] || '30px'};
      height: ${area[size] || '30px'};
      border: ${border[size] || '2px'} solid #dddddd;
      border-top: ${border[size] || '2px'} solid #3c4c7b;
    `};
`;

const Container = styled.div`
  ${({ size }) => css`
    height: ${height[size] || '100px'};
    border: 1px solid transparent;
  `};
`;

const Loading = props => (
  <Container {...props}>
    <Spinner {...props} />
  </Container>
);

export default Loading;
