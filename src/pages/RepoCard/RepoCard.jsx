import React from "react";

const RepoCard = (props) => {
	const {id, name} = props.location.state;
	return (
		<>
			<h1>Repository</h1>
			<h2>{name}</h2>
			<p>{id}</p>
		</>
	)
}

export default RepoCard;
