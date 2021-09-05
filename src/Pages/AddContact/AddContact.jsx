import ContactForm from '../../components/ContactForm';
import { Section, Title, ContactsLink } from './AddContact.styled';

export default function AddContact() {
  return (
    <Section>
      <Title>New Contact</Title>
      <ContactForm />
      <ContactsLink to="/register">
        <span>Go to contacts page</span>
      </ContactsLink>
    </Section>
  );
}
