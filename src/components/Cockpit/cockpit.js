import React,{Component} from 'react'
import Aux from '../../hoc/aux'
class Cockpit extends Component{
    render(){
        return (
            <Aux>
            < h1>Welcome To new World</h1>
            <p className={this.props.className}>React And Redux</p><br/><br/>
            <button  className={this.props.classes.b1} onClick={this.props.clicked}>Click Here</button> 
            <button  onClick={this.props.toggle}>Toggle person</button>
            </Aux>
        )
    }

}


export default Cockpit;