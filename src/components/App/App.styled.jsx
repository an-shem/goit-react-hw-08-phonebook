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

// export const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
// `;

// export const Title = styled.h1`
//   margin-bottom: 20px;
//   text-align: center;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 28px;
//   letter-spacing: 0.03em;
//   padding-bottom: 6px;
//   border-bottom: 1px solid #757575;
// `;
