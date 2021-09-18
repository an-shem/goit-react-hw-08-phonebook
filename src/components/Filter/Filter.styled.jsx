import styled from '@emotion/styled';

export const FilterInput = styled.input`
  margin-bottom: 24px;
  padding: 6px 20px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.03em;
  border-radius: 20px;
  border: 2px solid ${({ filter }) => (filter ? '#77aad4;' : '#89888ba6')};
  outline: none;
  background-color: #f2f4f3;

  &:focus {
    border: 2px solid #77aad4;
  }

  @media screen and (min-width: 400px) {
    font-size: 18px;
  } ;
`;
