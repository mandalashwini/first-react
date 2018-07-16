import React from 'react'
import Person from './Person/Person'
const Persons = (props) =>  props.persons.map( (per,index) => {
        return <Person
        name = {per.name}
        key = {per.id}
        click = {props.clicked.bind(index)}
        changed= {(event) => props.changed(event,per.id)}
        />
      })
    


export default Persons;