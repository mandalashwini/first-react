import React, { Component } from 'react';
import classes from './App.css';
import Radium from 'radium'
import Persons from '../components/persons/persons'
class Apps extends Component {
  state = {
   persons:[
      {id: '1',name: "Divya"},
      {id: '2',name: "Pinky"},
      {id: '3',name: "Sangita"},
    ],
    flag : true
  }
  clickHandler = () => {
    console.log("success!!!!")
    this.setState( {
      persons:[
      {id: '1',name: "Vicky"},
      {id: '2',name: "Naval"},
      {id: '3',name: "Naval-Ashu"}
      ]
    } )
  }
  nameChangeHandler = (event,id) =>{
    const index = this.state.persons.findIndex(person =>{
       return person.id === id
    })  
    const person = {
      ...this.state.persons[index]
    }
    person.name = event.target.value;
    const person_data = [...this.state.persons]
    person_data[index]= person
    this.setState({persons: person_data})

  }

  toggleHandler = () => {

    const show = this.state.flag
    this.setState({
      flag: !show
    })
  }
 deleteHandler = (index) => {
   console.log(index)
   //const person = this.state.persons.slice() //make copy of persons
   const person = [...this.state.persons]
   person.splice(index,1)
  this.setState(
      {  persons: person}
  )
   console.log(person)
 }

  paraClickHandler = (x) => {
    console.log("Value of"+x)
  }

  render() {
  
    let person = null ;
          if(this.state.flag){
            person = (
          <div>
            <Persons persons={this.state.persons}
            clicked = {this.deleteHandler}
            changed= {this.nameChangeHandler}
            />
          </div>
            )
  
          }
        const Assignclass = []
        if (this.state.persons.length <= 2){
          Assignclass.push(classes.red)
        }
        if (this.state.persons.length <= 1){
          Assignclass.push(classes.bold)
           console.log(classes)
        }

    return (
      <div className={classes.App}>
        < h1>Welcome To new World</h1>
        <p className={Assignclass.join(' ')}>React And Redux</p><br/><br/>
        <button  className={classes.b1} onClick={this.clickHandler}>Click Here</button> 
        <button  onClick={this.toggleHandler}>Toggle person</button>
        {person}
      </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'React And Redux'))
  }
}

export default Radium(Apps);
