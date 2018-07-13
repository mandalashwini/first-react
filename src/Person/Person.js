import React from 'react';
import classes from './Person.css'
const Person = (props) => {
    
    
    return (
        <div className={classes.Person}>
         <p onClick={props.click}>My name is {props.name} and My age is {Math.floor(Math.random()*30)} Years</p>
         <p>{props.children}</p>  
         <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        );
    }
    
   

export default Person;