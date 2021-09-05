import RregisterForm from '../../components/RregisterForm';

import { Container, Section, Title, LoginLink } from './RregisterPages.styled';

export default function RregisterPages() {
  return (
    <Container>
      <Section>
        <Title>Registration</Title>
        <RregisterForm />
        <LoginLink to="/login">
          <span>Go to login page</span>
        </LoginLink>
      </Section>
    </Container>
  );
}
