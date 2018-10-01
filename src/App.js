import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Province from './Province';

class Hello extends Component {
  render(){
    return (
      <h1>Hello "{ this.props.name}"</h1>
    )
  }
}

class Menu extends Component{
  render(){
    return (
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    )
  }

}

class Search extends Component{
  render(){
    return (
      <form>
        <labe>Search: </labe>
        <input type="text"></input>
      </form>
    )
  }
}

class Header extends Component{
  render(){
    return (
    <div>
      <Menu/>
      <Search/>
    </div>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <div>
        <Hello name="Emba"/>
        <Counter/>
        <Province/>
      </div>
    )
  }
}

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:0,
      power:null
    }
  }

  handleClick = (e) => {
    console.log("Hello:",this.state.count);
    this.setState({
      count:this.state.count + 1,
      power:this.state.count == 0? this.state.count+ 1: this.state.power * 1.5
    })
  }

  handleReset = (e) => {
    this.setState({
      count: 0,
      power:null
    }
    )
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Power: {this.state.power}</h1>
        <button onClick={this.handleClick}>Add Count</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>    
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> 
        <Content/>       
      </div>
    );
  }
}

export default App;

let test = {"test":"xxx"}
