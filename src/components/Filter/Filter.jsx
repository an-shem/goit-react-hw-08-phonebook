import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/sliceFilter';
import * as contactsSelectors from '../../redux/contacts-selectors.js';
import { FilterInput } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <FilterInput
      filter={filter}
      type="text"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      placeholder="Find contacts by name"
      required
      onChange={e => dispatch(filterContact(e.target.value))}
    />
  );
}
