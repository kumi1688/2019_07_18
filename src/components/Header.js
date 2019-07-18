import React from 'react';
import logo from '../logo.svg';

const Header = props =>{

    const name = props.name;
    const foo = props.foo;

    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <div>hello my name is {props.name}</div>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

export default Header;