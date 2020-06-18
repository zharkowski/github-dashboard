import React from 'react';
import Main from '../../pages/Main/Main';
import RepoCard from "../../pages/RepoCard/RepoCard";
import {Switch, Route, Redirect} from 'react-router-dom';

const App = () => (
	<Switch>
		{/*<Route path="/home" component={Main} />*/}
		{/*<Route path="/repo/:repoId" component={RepoCard} />*/}
		<Route path="/home" render={(props) => (<Main {...props} />)} />
		<Route path="/repo/:id" render={(props) => (<RepoCard {...props} />)} />

		<Redirect from="/" to="/home"/>
	</Switch>
);

export default App;
