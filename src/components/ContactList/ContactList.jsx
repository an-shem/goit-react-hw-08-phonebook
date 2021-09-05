import { useEffect } from 'react';
import { fetchAllContacts } from '../../redux/contactsOperations';
import * as contactsSelectors from '../../redux/contacts-selectors.js';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem';
import { ListContact } from './ContactList.styled';

export default function ContactList() {
  const sortedFilteredContacts = useSelector(
    contactsSelectors.getSortedFilteredContacts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <ListContact>
      {sortedFilteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ListContact>
  );
}
