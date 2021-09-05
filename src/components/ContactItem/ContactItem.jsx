import PropTypes from 'prop-types';
import { MdDeleteSweep } from 'react-icons/md';
import { ImUser, ImPhone } from 'react-icons/im';
import {
  Contact,
  Text,
  DeleteButton,
  DataWrap,
  PhoneLink,
  PhoneLinkText,
} from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';

export default function ContactItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  return (
    <Contact>
      <Text>
        <DataWrap>
          <ImUser /> {name}
        </DataWrap>
        <PhoneLink href={`tel:+${number}`}>
          <PhoneLinkText>
            <ImPhone style={{ marginRight: '6px' }} />
            {number}
          </PhoneLinkText>
        </PhoneLink>
      </Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
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
