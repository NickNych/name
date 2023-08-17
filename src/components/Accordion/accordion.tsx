import React from "react";

function Accordion(props: any) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>
}

function AccordionTitle(props: any) {
    console.log("App is rendering")
    return  <h3>{props.title}</h3>;
}

function AccordionBody(props: any) {
    console.log("App is rendering")
    return  (
        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        </ul>
    )
}
// asawaws
export default Accordion;

