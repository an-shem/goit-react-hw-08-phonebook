import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux//authUser/authUser-selectors';
import { logOut } from '../../redux/authUser/authUserOperations.js';
import { ImEnter } from 'react-icons/im';
import { LogoutButton, UserMenuWrap, UserEmail } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <UserMenuWrap>
      <UserEmail>{userEmail}</UserEmail>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        <ImEnter />
      </LogoutButton>
    </UserMenuWrap>
  );
}
