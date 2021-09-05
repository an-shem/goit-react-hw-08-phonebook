import styled from '@emotion/styled';

import imgWrap from '../../images/apple-1841553.jpg';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3a3530;
  background: url(${imgWrap});
  background-size: cover;
`;

export const Container = styled.div`
  padding-right: 220px;
  display: flex;
  justify-content: flex-end;
`;
