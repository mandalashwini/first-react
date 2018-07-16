import React from 'react';
import classes from './Person.css'
const Person = (props) => {
        debugger
         const num = Math.random ()
      /*  if (num > 0.2){
        throw new Error("Number is greater than 1");
        }*/
    
    return (
        <div className={classes.Person}>
         <p onClick={props.click}>My name is {props.name} and My age is {Math.floor(Math.random()*30)} Years</p>
         <p>{props.children}</p>  
         <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        );
    }
    
   

export default Person;