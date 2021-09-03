import PropTypes from 'prop-types';
import { MdDeleteSweep } from 'react-icons/md';
import {
  Contact,
  Text,
  DeleteButton,
  DataWrap,
  PhoneLink,
  PhoneLinkText,
} from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContactApi } from '../../redux/contactsOperations';

export default function ContactItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  return (
    <Contact>
      <Text>
        <DataWrap>- {name}:</DataWrap>
        <PhoneLink href={`tel:+${number}`}>
          <PhoneLinkText>{number}</PhoneLinkText>
        </PhoneLink>
      </Text>
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContactApi(id))}
      >
        <MdDeleteSweep style={{ fontSize: ' 24px' }} />
      </DeleteButton>
    </Contact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
