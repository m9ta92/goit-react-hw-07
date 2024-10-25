import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import { TbUserFilled } from 'react-icons/tb';
import { TbPhoneFilled } from 'react-icons/tb';

import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};

	return (
		<div className={css.contactCard}>
			<div>
				<div className={css.title}>
					<TbUserFilled />
					<p>{name}</p>
				</div>
				<div className={css.title}>
					<TbPhoneFilled />
					<a href="tel:">{number}</a>
				</div>
			</div>
			<button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
				❌
			</button>
		</div>
	);
};

export default Contact;
