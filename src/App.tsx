import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
// import {Debugger} from "inspector";



// must return JSX
function App() {
    console.log("App is rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            <Rating/>
            <Accordion title={"Big Menu"}/>
            <Rating/>
        </div>

    )
}

function PageTitle(props: any) {
    debugger
    console.log("AppTitle is rendering")

    return <h1>{props.title}</h1>
}





export default App;
