import React from "react";
import ReactDOM from "react-dom/client"

const element = React.createElement("h1",{key: "e1", id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{key: "e1",id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");




const div1 = React.createElement('div',{},[element, element2]); 
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(div1);




