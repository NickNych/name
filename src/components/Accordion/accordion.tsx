import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody collapsed={props.collapsed}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("App is rendering")
    return <h3>{props.title}</h3>;
}

type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("App is rendering")
    if (props.collapsed) {
        return <></>
    } else {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }

}

// asawaws
export default Accordion;

