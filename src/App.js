import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Resume from './components/Resume'

export default class App extends Component {

  state = {
    resumeClicked: false,
    projectsClicked: false,
    contactClicked: false,
  }

  setResume = (event) => {
    event.preventDefault()
    this.setState({resumeClicked: true})
  }

  showResume(){
    return(
      this.state.resumeClicked ? <Resume/> : <Home/>
    )
  }

  render() {
    return (
      <div className='app'>
        <header>
          <nav className='header' >
            <a className='link' href='http://localhost:3000/'>home</a>
            <p className='link' > | </p>
            <button className='link' onClick={this.setResume}>resume</button>
            <p className='link' > | </p>
            <a className='link' href='http://localhost:3000/'>projects</a>
            <p className='link' > | </p>
            <a className='link' href='http://localhost:3000/'>contact</a>
          </nav>
        </header>
        <div className='body'>
          {this.showResume()}
        </div>
      </div>
    )
  }
}
