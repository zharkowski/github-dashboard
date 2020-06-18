import React from "react";

const Search = () => {
	return (
		<form>
			<input
				type="text"
				placeholder={"Repositories Search"}
				onChange={() => console.log("")}
			/>
		</form>
	);
}

export default Search;
