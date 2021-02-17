import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
height: 100vh;

`;

const MainWrapper = styled.div`
position: relative;
padding-top: 50%;
p {
  position: absolute;
  right: 50%;
}
`

export function MainContainer() {
  return (
  <Positioner>
  <MainWrapper>
  <p>메인페이지입니다</p>
  </MainWrapper>
  </Positioner>);
}
