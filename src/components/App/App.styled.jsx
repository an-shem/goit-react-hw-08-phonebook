import styled from '@emotion/styled';

import imgWrap from '../../images/apple-1841553.jpg';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3a3530;
  background: url(${imgWrap});
  background-size: cover;
  background-position: right top;
  overflow-y: scroll;

  @media screen and (min-width: 700px) {
    background-position: center top;
  }

  @media screen and (min-width: 1800px) {
    margin: 0 auto;
    width: 1800px;
  }
`;

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    width: 380px;
  }

  @media screen and (min-width: 600px) {
    width: 480px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: flex-end;
    margin: auto;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    /* display: flex;
    justify-content: flex-end;
    padding-left: 0;
    padding-right: 200px; */
  }
`;
