import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectNameFilter } from './filtersSlice';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const initialState = {
	contacts: {
		items: [],
		loading: false,
		error: null,
	},
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})

			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
			})

			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(
					contact => contact.id !== action.payload
				);
			}),
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, filter) =>
		contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		)
);
