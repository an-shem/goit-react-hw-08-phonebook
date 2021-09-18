import styled from '@emotion/styled';

export const MyCard = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 80vh;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f4f3d1;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (min-width: 700px) {
    margin-top: 40px;
    margin-right: 10%;
    width: 40%;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 16%;
    width: 34%;
  }

  /* margin-top: 40px;
  width: 40%;
  height: 80vh;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f4f3d1;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  } */
`;
