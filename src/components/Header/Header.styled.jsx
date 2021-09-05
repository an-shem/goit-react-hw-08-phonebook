import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const HeaderMenu = styled.div`
  width: 70%;
  padding: 8px 40px 0px;
  display: flex;
  justify-content: space-between;
  font-family: 'Libre Baskerville', serif;
  color: #f2f4f3;
  border-bottom: 1px solid #f2f4f3;
`;

export const HeaderTitel = styled.h1`
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 1.3;
  letter-spacing: 0.03em;
`;

export const HeaderNav = styled.nav``;

export const HeaderLoginLink = styled(Link)`
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0.03em;
  cursor: pointer;
  text-decoration: none;
  color: #f2f4f3;

  &:hover {
    color: #77aad4;
  }
`;
