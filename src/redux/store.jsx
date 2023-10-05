import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FilterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contactList'],
};

const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'], 
    },
  }),
];

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
    filter: FilterSlice.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
