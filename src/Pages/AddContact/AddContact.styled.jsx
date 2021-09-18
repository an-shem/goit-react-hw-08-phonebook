import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.03em;
  padding-bottom: 6px;
  border-bottom: 1px solid #4a3934;
  color: #4a3934;

  @media screen and (min-width: 400px) {
    font-size: 30px;
  }
`;

export const ContactsLink = styled(Link)`
  margin: 40px auto;
  font-size: 14px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #757575;
  cursor: pointer;

  &:hover {
    color: #77aad4;
  }

  @media screen and (min-width: 400px) {
    font-size: 18px;
  }
`;
