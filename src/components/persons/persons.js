import React,{Component} from 'react'
import Person from './Person/Person'
class Persons extends Component{
     render (){
         return ( this.props.persons.map( (per,index) => {
        return <Person
        name = {per.name}
        key = {per.id}
        click = {this.props.clicked.bind(index)}
        changed= {(event) => this.props.changed(event,per.id)}
        />
      }) )
    }
}
export default Persons
