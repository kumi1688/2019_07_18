import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends React.Component{
  componentDidMount() {
    console.log('Component DID MOUNT');
  }
  render(){
    const name = "Lain";
    return (
        <div className="App">
          <Header name={name}/>
        </div>
    );
  }
}

//function App() {

//}

export default App;
