import React from 'react';
import {render} from 'react-dom';
import styles from './style/app.scss';
import AwesomeComponent from './AwesomeComponent.jsx';
import Grid from './Grid.jsx';

require("font-awesome-webpack");

class App extends React.Component {
  render () {
    return (
    	<div>
			<Grid />
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));