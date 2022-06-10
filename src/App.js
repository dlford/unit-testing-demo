import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<h1>Unit Testing Demo</h1>
				<p>
					Take a look at the examples in{' '}
					<code>src/components</code>, use the command{' '}
					<code>npm test</code> to run the tests.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
