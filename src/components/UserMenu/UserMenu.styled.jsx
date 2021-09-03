import styled from '@emotion/styled';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Libre Baskerville', serif;
  color: #f2f4f3;
`;

export const UserEmail = styled.span`
  margin-right: 4px;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.03em;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: inherit;
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    color: #77aad4;
  }
`;

export const ButtonTitel = styled.span`
  margin-right: 2px;
`;
