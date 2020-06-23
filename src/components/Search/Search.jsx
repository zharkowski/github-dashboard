import React from "react";

const Search = () => {

	const searchRepos = (evt) => {
		evt.preventDefault();
		const query = evt.target.query.value;
		console.log(query);
	}

	return (
		<form
			onSubmit={searchRepos}
		>
			<input
				type="text"
				name="query"
				placeholder="Repositories Search"
			/>
			<button type="submit">
				Search
			</button>
		</form>
	);
}

export default Search;
