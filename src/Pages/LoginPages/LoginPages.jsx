import LoginForm from '../../components/LoginForm';

import { Container, Section, Title, RegisterLink } from './LoginPages.styled';

export default function LoginPages() {
  return (
    <Container>
      <Section>
        <Title>Login or register</Title>
        <LoginForm />
        <RegisterLink to="/register">
          <span>Go to registration page</span>
        </RegisterLink>
      </Section>
    </Container>
  );
}
