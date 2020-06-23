import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from "../../pages/Main/Main.jsx";
import RepoCard from "../../pages/RepoCard/RepoCard.jsx";

const App = () => (
	<Switch>
		<Route path="/home" render={(props) => (<Main {...props} />)} />
		<Route path="/repo/:id" render={(props) => (<RepoCard {...props} />)} />

		<Redirect from="/" to="/home"/>
	</Switch>
);

export default App;
