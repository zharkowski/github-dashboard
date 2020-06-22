import React from "react";
import Search from "../../components/Search/Search.jsx";
import ReposList from "../../components/ReposList/ReposList.jsx";

const Main = () => {
	const repos = [
		{
			id: 0,
			name: `fpinscalal`,
		},
		{
			id: 1,
			name: `taskmanager`,
		}
	]

	return (
		<>
			<h1>Repos Search</h1>
			<Search/>
			<ReposList
				repos={repos}
			/>
		</>
	)
}

export default Main;
