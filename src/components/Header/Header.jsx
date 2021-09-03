import UserMenu from '../UserMenu';
import {
  HeaderWrap,
  HeaderMenu,
  HeaderTitel,
  HeaderList,
  HeaderListItem,
  HeaderListItemNav,
  HeaderNav,
  HeaderLoginLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderMenu>
        <HeaderTitel>Phonebook</HeaderTitel>
        {/* <HeaderNav>
          <HeaderLoginLink to={`/login`}>Login</HeaderLoginLink>
        </HeaderNav> */}
        <UserMenu />
      </HeaderMenu>
    </HeaderWrap>

    // <HeaderNav>
    //   <HeaderList>
    //     <HeaderListItem>
    //       <HeaderListItemNav exact to={`/register`}>
    //         Register
    //       </HeaderListItemNav>
    //     </HeaderListItem>
    //     <HeaderListItem>
    //       <HeaderListItemNav to={`/login`}>Login</HeaderListItemNav>
    //     </HeaderListItem>
    //     <HeaderListItem>
    //       <HeaderListItemNav exact to={`/contacts`}>
    //         Contacts
    //       </HeaderListItemNav>
    //     </HeaderListItem>
    //   </HeaderList>
    // </HeaderNav>
  );
};

export default Header;
