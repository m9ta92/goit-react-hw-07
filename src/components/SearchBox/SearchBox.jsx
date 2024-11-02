import css from './SearchBox.module.css';
import { GrClearOption } from 'react-icons/gr';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectNameFilter);

	const handleFilterChange = e => {
		dispatch(changeFilter(e.target.value));
	};

	const handleFilterReset = () => {
		dispatch(changeFilter(''));
	};

	return (
		<div className={css.search}>
			<h4>Find contact by name:</h4>
			<label className={css.form}>
				<input
					className={css.input}
					type="text"
					placeholder="Search contacts..."
					value={filter}
					onChange={handleFilterChange}
				/>
				<button className={css.btn} onClick={handleFilterReset}>
					<GrClearOption />
				</button>
			</label>
		</div>
	);
};

export default SearchBox;
