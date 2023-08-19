import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
// import {Debugger} from "inspector";



// must return JSX
function App(props: any) {
    console.log("App is rendering")
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*<Rating value={22324}/>*/}
            <Accordion titleValue={"Big Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>

    )
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("AppTitle is rendering")

    return <h1>{props.title}</h1>
}





export default App;
