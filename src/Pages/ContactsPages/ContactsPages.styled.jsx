import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.03em;
`;

export const TitleWrap = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.03em;
  padding-bottom: 6px;
  border-bottom: 1px solid #4a3934;
  color: #4a3934;
`;

export const AddContactLink = styled(Link)`
  color: #4a3934;
  cursor: pointer;
  background: inherit;
  border: none;

  &:hover {
    color: #4b80ac;
  }
`;
