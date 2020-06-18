import React from "react";
import Search from "../../components/Search/Search";
import ReposList from "../../components/ReposList/ReposList";

const Main = () => {
	const repos = [
		{
			id: 0,
			name: `fpinscala`,
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
