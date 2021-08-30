import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  },
);

// Не мемоизированный селектор
//
// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
//   return filteredContacts;
// };
