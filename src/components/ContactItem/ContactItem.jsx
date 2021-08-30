import PropTypes from 'prop-types';
import {
  Contact,
  Text,
  DeleteButton,
  DataWrap,
  PhoneLink,
} from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContactApi } from '../../redux/contactsOperations';

export default function ContactItem({ contact: { name, phone, id } }) {
  const dispatch = useDispatch();
  return (
    <Contact>
      <Text>
        <DataWrap>- {name}:</DataWrap>
        <PhoneLink href={`tel:+${phone}`}>{phone}</PhoneLink>
      </Text>
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContactApi(id))}
      >
        X
      </DeleteButton>
    </Contact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
