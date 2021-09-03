// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const getUser = async () => {
//   const data = await axios.get(`${BASE_URL}/contacts`).then(({ data }) => {
//     return data;
//   });
//   return data;
// };

// export const addContact = async contact => {
//   const data = await axios({
//     method: 'post',
//     url: `${BASE_URL}/contacts`,
//     data: contact,
//   }).then(({ data }) => data);
//   return data;
// };

// export const deleteContact = async contactId => {
//   const idRemoteContact = await axios
//     .delete(`${BASE_URL}/contacts/${contactId}`)
//     .then(({ data }) => data.id);
//   return idRemoteContact;
// };
