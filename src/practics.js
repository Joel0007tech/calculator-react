import React from "react";

function DisplayNumber (){
    document.getElementById("number").style.backGroundcolor="blue"
}
function Input () {
    return (
        <div><input id="number"/>
        <p onclick ={DisplayNumber} style={{cursor: "pointer"}}>1</p></div>
    )
}
export default Input