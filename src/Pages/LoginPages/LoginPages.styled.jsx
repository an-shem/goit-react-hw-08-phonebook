import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 60px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.03em;
  padding-bottom: 6px;
  border-bottom: 1px solid #4a3934;
  color: #4a3934;
`;

export const RegisterLink = styled(Link)`
  margin: 40px auto;
  font-size: 18px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #757575;
  cursor: pointer;

  &:hover {
    color: #77aad4;
  }
`;
