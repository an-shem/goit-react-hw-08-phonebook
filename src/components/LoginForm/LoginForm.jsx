import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authUser/authUserOperations';
import { Form, Label, Input, LabelName, LoginButton } from './LoginForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(logIn({ email, password }));
    reset(e);
  };

  const reset = e => {
    e.target.email.value = '';
    e.target.password.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName>Email</LabelName>
        <Input type="email" name="email" required />
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input type="password" name="password" required />
      </Label>
      <LoginButton type="submit">Login</LoginButton>
    </Form>
  );
}
