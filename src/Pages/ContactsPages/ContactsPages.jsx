import { ImAddressBook, ImUserPlus } from 'react-icons/im';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { useRouteMatch } from 'react-router-dom';
import {
  Section,
  Title,
  TitleWrap,
  AddContactLink,
} from './ContactsPages.styled';

export default function ContactsPages() {
  const { path } = useRouteMatch();

  return (
    <Section>
      <TitleWrap>
        <ImAddressBook />
        <Title>Contacts</Title>
        <AddContactLink to={`${path}/add`}>
          <ImUserPlus style={{ fontSize: ' 30px' }} />
        </AddContactLink>
      </TitleWrap>
      <Filter />
      <ContactList />
    </Section>
  );
}
