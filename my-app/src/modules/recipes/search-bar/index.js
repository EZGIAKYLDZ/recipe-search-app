import { useState } from 'react';
import '../../../App.css';

export const SearchBar = () => {
	const [query, setQuery] = useState('');

	function handleChange(e) {
		setQuery(e.target.value.trim());
	}

  function handleSubmit(e) {
    e.preventDefault();

  }

	return (
		<form onSubmit={handleSubmit}>
			<input className='search-input'
				onChange={handleChange}
				aria-label='Recipe search'
				placeholder='Search for recipes...'
			/>
		</form>
	);
};