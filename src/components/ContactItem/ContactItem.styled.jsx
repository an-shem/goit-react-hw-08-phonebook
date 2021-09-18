import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  border: 1px solid #4a3934;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 400px) {
    font-size: 18px;
  } ;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  color: #4a3934;
`;

export const DeleteButton = styled.button`
  color: #4a3934ac;
  cursor: pointer;
  background: inherit;
  border: none;

  &:hover {
    color: #ca5757;
  }
`;

export const DataWrap = styled.span`
  padding: 2px;
`;
export const PhoneLink = styled.a`
  padding: 2px;
  text-decoration: none;
`;

export const PhoneLinkText = styled.span`
  color: #6e4f40a0;

  &:hover {
    color: #6e4f40;
  }
`;
