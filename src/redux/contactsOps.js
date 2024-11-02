import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkApi) => {
		try {
			const { data } = await axios.get(
				'https://6725ee77c39fedae05b65308.mockapi.io/contacts'
			);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkApi) => {
		try {
			const { data } = await axios.post(
				'https://6725ee77c39fedae05b65308.mockapi.io/contacts',
				contact
			);

			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, thunkApi) => {
		try {
			await axios.delete(
				`https://6725ee77c39fedae05b65308.mockapi.io/contacts/${id}`
			);

			return id;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
