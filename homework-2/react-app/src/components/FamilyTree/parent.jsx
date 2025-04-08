import React from "react";
import Child from "./child";
import "./familyTree.css"

function Parent ({ family }) {

    return (
        <div className="parent">
        <h1>*{family.name}*</h1>
        <div>
            
            {family.children.map((child, index) => (
                <Child key={index} child={child} />
            ))}
        </div>
        </div>
    )
}

export default Parent