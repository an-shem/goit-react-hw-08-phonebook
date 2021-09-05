import UserMenu from '../UserMenu';
import { getUserIsLoggedIn } from '../../redux/authUser/authUser-selectors';
import { HeaderWrap, HeaderMenu, HeaderTitel } from './Header.styled';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <HeaderWrap>
      <HeaderMenu>
        <HeaderTitel>Phonebook</HeaderTitel>
        {isLoggedIn && <UserMenu />}
      </HeaderMenu>
    </HeaderWrap>
  );
};

export default Header;
