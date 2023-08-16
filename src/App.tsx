import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/accordion";
// import {Debugger} from "inspector";



// must return JSX
function App() {
    console.log("App is rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    )
}

function AppTitle() {
    console.log("AppTitle is rendering")

    return <>This is APP component</>
}


function Star() {
    console.log("Star is rendering")

    return <div>
        star
    </div>
}

function Rating() {
    console.log("Rating is rendering")
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}





export default App;
