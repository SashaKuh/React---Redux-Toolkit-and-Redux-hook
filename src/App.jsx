import React from 'react';
import Form from './components/Form/Form';
import MemoizedContactList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Title } from './App.styled';
import { useContactActions } from './components/ContactsAction/ContactsAction'; 

export default function App() {
  const { contacts, filter, handleAddContact } = useContactActions(); 

  return (
    <React.Fragment>
      <Title>Phonebook</Title>

      <Form onSubmit={handleAddContact} />

      {contacts.length > 1 || filter !== '' ? <Filter /> : null}

      {contacts.length > 0 && (
        <MemoizedContactList />
      )}
    </React.Fragment>
  );
}
