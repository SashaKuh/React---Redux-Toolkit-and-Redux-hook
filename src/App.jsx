import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from './components/Form/Form';
import MemoizedContactList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter'; 
import { getFilter, getContacts } from './redux/Selector/Selector';
import { addContact } from './redux/ContactsSlice/ContactsSlice';

import {Title} from './App.styled'

const filterContacts = (contacts, filter) =>
  contacts.filter(el => el.name.toLowerCase().includes(filter));

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = filterContacts(contacts, filter);

  const handleAddContact = (values) => {
    dispatch(addContact(values));
  };

  return (
    <React.Fragment>
      <Title>
        Phonebook
      </Title>

      <Form onSubmit={handleAddContact} />

      {contacts.length > 1 || filter !== '' ? <Filter /> : null}

      {contacts.length > 0 && (
        <MemoizedContactList contacts={filteredContacts} />
      )}
    </React.Fragment>
  );
}
