import React from "react";
import Granchild from "./grandchild";
import "./familyTree.css"


function Child ({ child }) {
    return (
        <div className="child">
            <h2>{child.name}</h2>
            <p>Age: {child.age}</p>
            {child.grandchildren.map((grandchild , index) => (
                <Granchild key={index} grandchild={grandchild} />
            ))}
        </div>
    )
}
export default Child