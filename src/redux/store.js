import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const contactsPersistConfig = {
	key: 'contacts',
	storage,
	whitelist: ['items'],
};

const rootReducer = combineReducers({
	contacts: persistReducer(contactsPersistConfig, contactsReducer),
	filters: filtersReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export const persistor = persistStore(store);
