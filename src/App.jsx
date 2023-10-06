import React from 'react';
import Form from './components/Form/Form';
import MemoizedContactList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Title } from './App.styled';
import { useContactActions } from './components/Filter/Filter'; 

export default function App() {
  const { contacts, filter } = useContactActions(); 

  return (
    <React.Fragment>
      <Title>Phonebook</Title>

      <Form />

      {contacts.length > 1 || filter !== '' ? <Filter /> : null}

      {contacts.length > 0 && (
        <MemoizedContactList />
      )}
    </React.Fragment>
  );
}
