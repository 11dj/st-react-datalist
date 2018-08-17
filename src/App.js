import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './fruits'
import DataList from './components/dataList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleInputchange (value) {
    console.log(value)
    this.setState({ value: value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ST React Datalist</h1>
        </header>
        <p className="App-intro">
          I made Datalist for React. because React-datalist is too old and nothing to update.
        </p>

        <div className='topic' >Choose your favorite fruit.</div>

          <DataList
            option={fruits}
            placeholder='Type here'
            onInputChange={this.handleInputchange.bind(this)}
            value={this.state.value}
          />
          
          <div className={`topic ${this.state.value ? 'show': 'hide' }`}> You choose {this.state.value}</div>
          <button className='topic' onClick={() => this.setState({ value: '' })}> clear </button>

      </div>
    );
  }
}

export default App;
