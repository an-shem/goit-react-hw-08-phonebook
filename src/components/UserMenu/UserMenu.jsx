import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/authUser/authUserOperations.js';
import { ImEnter } from 'react-icons/im';
import {
  LogoutButton,
  UserMenuWrap,
  UserEmail,
  ButtonTitel,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authUser.user.email);

  return (
    <UserMenuWrap>
      <UserEmail>{user} /</UserEmail>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        <ButtonTitel>Logout</ButtonTitel> <ImEnter />
      </LogoutButton>
    </UserMenuWrap>
  );
}
