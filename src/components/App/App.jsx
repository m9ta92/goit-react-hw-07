import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Loader from '../Loader/Loader.jsx';
import ContactList from '../ContactList/ContactList.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps.js';
import {} from '../../redux/contactsSlice.js';
import {
	selectContacts,
	selectError,
	selectIsLoading,
} from '../../redux/selectors.js';

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const contacts = useSelector(selectContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<div className={css.app}>
				<h1 className={css.title}>My phonebook</h1>
				<ContactForm />
				<SearchBox />
				{isLoading && !error && <Loader />}
				{contacts ? (
					<ContactList contacts={contacts} />
				) : (
					<b>Request in progress...</b>
				)}
			</div>
		</>
	);
}

export default App;
