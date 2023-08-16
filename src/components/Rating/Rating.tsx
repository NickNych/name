import React from "react";
export function Rating() {
    console.log("Rating is rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )

function Star() {
    console.log("Star is rendering")

    return <span>star </span>
}

}