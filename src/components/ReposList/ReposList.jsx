import React from "react";
import {Link} from "react-router-dom";

const ReposList = (props) => {
	const {repos} = props;

	return (
		<ul className={`repos list`}>
			{repos.map((repo) => (
				<li
					className={`repos__item`}
					key={repo.id}>
					<h2 className={`repos__name`}>
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
