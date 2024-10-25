import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectNameFilter);

	const handleFilterChange = e => {
		dispatch(changeFilter(e.target.value));
	};

	return (
		<div className={css.search}>
			<h4>Find contacts by name:</h4>
			<input
				className={css.input}
				type="text"
				placeholder="Search contacts..."
				value={filter}
				onChange={handleFilterChange}
			/>
		</div>
	);
};

export default SearchBox;
