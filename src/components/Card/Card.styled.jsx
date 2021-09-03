import styled from '@emotion/styled';

export const MyCard = styled.div`
  margin-top: 40px;
  width: 40%;
  height: 80vh;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f4f3d1;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow-y: scroll;
  /* scrollbar-width: none; */

  &::-webkit-scrollbar {
    width: 0;
  }
`;
