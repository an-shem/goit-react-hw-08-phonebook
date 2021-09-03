import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authUser/authUserOperations';
// import * as contactsSelectors from '../../redux/contacts-selectors.js';
import { Form, Label, Input, LabelName, LoginButton } from './LoginForm.styled';
// import toast from 'react-hot-toast';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('email :>> ', email);
    console.log('password :>> ', password);

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
        <Input
          type="email"
          name="email"
          // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input
          type="password"
          name="password"
          // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <LoginButton type="submit">Login</LoginButton>
    </Form>
  );
}
