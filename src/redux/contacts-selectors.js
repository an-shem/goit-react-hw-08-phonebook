import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// Мемоизированный селектор
export const getSortedFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
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
