import RregisterForm from '../../components/RregisterForm';

import { Container, Section, Title } from './RregisterPages.styled';

export default function RregisterPages() {
  return (
    <Container>
      <Section>
        <Title>Registration</Title>
        <RregisterForm />
      </Section>
    </Container>
  );
}
