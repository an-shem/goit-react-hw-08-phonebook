import { useDispatch } from 'react-redux';
import { register } from '../../redux/authUser/authUserOperations';
import {
  Form,
  Label,
  Input,
  LabelName,
  RegisterButton,
} from './RregisterForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(register({ name, email, password }));
    reset(e);
  };

  const reset = e => {
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
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
        <LabelName>Email</LabelName>
        <Input type="email" name="email" required />
      </Label>
      <Label>
        <LabelName>Password</LabelName>
        <Input
          type="password"
          name="password"
          minlength="7"
          autocomplete="off"
          placeholder="at least 7 characters ..."
          required
        />
      </Label>
      <RegisterButton type="submit">Register</RegisterButton>
    </Form>
  );
}
