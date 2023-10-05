import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const ContactsSlice = createSlice({
  name: 'contact',
  initialState: {
    contactList: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      state.contactList.push({ id: nanoid(6), name, number });
    },
    deleteContact(state, action) {
      const index = state.contactList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactList.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;

