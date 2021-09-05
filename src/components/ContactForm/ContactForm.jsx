import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as contactsOperations from '../../redux/contactsOperations';
import * as contactsSelectors from '../../redux/contacts-selectors.js';
import { Form, Label, Input, LabelName, AddButton } from './ContactForm.styled';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const history = useHistory();
  const goToContacts = useRef(false);

  useEffect(() => {
    if (!goToContacts.current) {
      goToContacts.current = true;
      return;
    }
    history.push('/contacts');
  }, [history, contacts]);

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    if (nameVerification(name)) {
      toast.error(`${name} is already in contacts`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#f2f4f3',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#f2f4f3',
        },
      });
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(contactsOperations.setContact(newContact));
    reset(e);
  };

  const nameVerification = name => {
    return contacts.find(contact => name === contact.name);
  };

  const reset = e => {
    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName>Name</LabelName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        <LabelName>Number</LabelName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}
