import { useDispatch } from 'react-redux';
import { register } from '../../redux/authUser/authUserOperations';
// import * as contactsSelectors from '../../redux/contacts-selectors.js';
import {
  Form,
  Label,
  Input,
  LabelName,
  RegisterButton,
} from './RregisterForm.styled';
// import toast from 'react-hot-toast';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('name :>> ', name);
    console.log('email :>> ', email);
    console.log('password :>> ', password);

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
          minlength="7"
          autocomplete="off"
          required
        />
      </Label>
      <RegisterButton type="submit">Register</RegisterButton>
    </Form>
  );
}

// {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepassword"
// }
