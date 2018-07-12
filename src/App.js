import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class Apps extends Component {
  state = {
   person:[
      {name: "Divya"},
      {name: "Pinky"},
      {name: "Sangita"},
    ],
    flag : true
  }
  clickHandler = () => {
    console.log("success!!!!")
    this.setState( {
      person:[
      {name: "Vicky"},
      {name: "Naval"},
      {name: "Naval-Ashu"}
      ]
    } )
  }
  nameChangeHandler = (event) =>{
    this.setState( {
      person:[
      {name: "Divya"},
      {name: event.target.value},
      {name: "Naval-Ashu"}
      ]
    } )

  }
  toggleHandler = () => {

    const show = this.state.flag
    this.setState({
      flag: !show
    })
  }


  paraClickHandler = (x) => {
    console.log("Value of"+x)
  }

  render() {
    const style = {
      backgroundColor: 'lightblue', 
      border: '2px solid #eee',
      font: 'inherit',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Welcome To new World</h1>
        <p>React And Redux</p><br/><br/>
        <button style={style} onClick={this.clickHandler}>Click Here</button>
        <button style={style} onClick={this.toggleHandler}>Toggle person</button>
        { this.state.flag ? 
            <div>
            <Person name={this.state.person[0].name} 
                    click={this.paraClickHandler.bind(this,1500)}>I am From Pune</Person>


            <Person name={this.state.person[1].name}
                    changed={this.nameChangeHandler}/>

            <Person name={this.state.person[2].name}/>
            <Person name="Naval"> I am From Solapur...</Person>
            </div> : null
        }
      </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'React And Redux'))
  }
}

export default Apps;
