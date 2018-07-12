import React from 'react';
import './Person.css'
const Person = (props) => {
    const f = false
    console.log(props)
    if (f){
    return (
        <div className="Person">
         <p onClick={props.click}>My name is {props.name} and My age is {Math.floor(Math.random()*30)} Years</p>
         <p>{props.children}</p>  
         <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        );
    }
    else 
    return null;
   
}
export default Person;