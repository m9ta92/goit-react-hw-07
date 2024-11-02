import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filters: filtersReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
