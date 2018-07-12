import React from 'react';
import './Person.css'
const Person = (props) => {
    return (
        <div className="Person">
         <p>My name is {props.name} and My age is {Math.floor(Math.random()*30)} Years</p>
         <p onClick={props.click}>{props.children}</p>
         <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
        );
}
export default Person;