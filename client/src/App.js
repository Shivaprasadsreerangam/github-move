//mport logo from './logo.svg';
import './App.css';
import MainPage from './components/Login/MainPage';
import Login from './components/Login/Login';

import { React,Component } from 'react';


class App extends Component {
	render() {
		return (
      <div>
        {/* {<MainPage />} */}
		{<Login/>}
        
			</div>
			
		)
	}
}

export default App;
