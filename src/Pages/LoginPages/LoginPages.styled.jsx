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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width-min: 160px; */
  height: 40px;
  margin: 20px auto;
  padding: 0 10px;
  font-size: 18px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #757575;
  background: #e5e3e9;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #77aad4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #f2f4f3;
  }
`;
