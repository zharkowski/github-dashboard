import React from "react";
import {Link} from "react-router-dom";

const ReposList = (props) => {
	const {repos} = props;

	return (
		<ul>
			{repos.map((repo) => (
				<li
					key={repo.id}>
					<h2>
						<Link to={{
							pathname: `/repo/${repo.id}`,
							state: repo
						}}>
							{repo.name}
						</Link>
					</h2>
					<p>{repo.id}</p>
				</li>
			))}
		</ul>
	);
}

export default ReposList;
