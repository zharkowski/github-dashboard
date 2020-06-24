import React from "react";

const Search = () => {

	const searchRepos = (evt) => {
		evt.preventDefault();
		const query = evt.target.query.value;
		console.log(query);
	}

	return (
		<form
			className={`search`}
			onSubmit={searchRepos}
		>
			<input
				className={`search__input`}
				type="text"
				name="query"
				placeholder="Repositories Search"
			/>
			<button
				className={`search__button`}
				type="submit">
				Search
			</button>
		</form>
	);
}

export default Search;
