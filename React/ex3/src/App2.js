import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from './img/logo192.png';

class App extends React.Component {
     constructor (props) {
        super(props) 
        this.state = {
           helpText: "Help text!",
           userData: ""
        }
        this.inputClick = this.inputClick.bind(this)
     }
     componentDidUpdate(prevProp) {
        if (this.state.helpText !== "Help")
        console.log("Some")
     }
    
    render() {
        return (<div className = "container  bg-primary-subtle"> 
        <Header title = "Title"/>
        {/* <Header title = "New title"/> */}
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input placeholder={this.state.helpText} 
    onChange = {event => this.setState({userData: event.target.value})}
    onClick={this.inputClick} onMouseEnter = {this.mouseOver} />
    <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
    <Image image = {logo}/>
    <img alt='logo' src= {logo}/>
    </div>
        )
    }
    inputClick () {
        this.setState({helpText: "Changed"})
        console.log("Clicked")} 
    mouseOver () {console.log("Mouse over")}
}

export default App