import ContactForm from '../../components/ContactForm';
import { Section, Title } from './AddContact.styled';

export default function AddContact() {
  return (
    <Section>
      <Title>New Contact</Title>
      <ContactForm />
    </Section>
  );
}
