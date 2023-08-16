import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Debugger} from "inspector";


// must return JSX
function App() {
    return (
        <div>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Star() {
    return <div>
        star</div>
}

function Rating() {
    debugger
    return (

        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    return <div>
        <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
