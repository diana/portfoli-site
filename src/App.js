import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default class App extends Component {

  state = {
    resumeClicked: false,
    projectsClicked: false,
    contactClicked: false,
  }

  setResume = (event) => {
    event.preventDefault()
    this.setState({resumeClicked: true, projectsClicked: false, contactClicked: false})
  }

  setProjects = (event) => {
    event.preventDefault()
    this.setState({projectsClicked: true, resumeClicked: false, contactClicked: false})
  }

  setContact = (event) => {
    event.preventDefault()
    this.setState({contactClicked: true, projectsClicked: false, resumeClicked: false})
  }

  showResume(){
    return(
      this.state.resumeClicked ? <Resume/> : <Home/>
    )
  }

  showProjects(){
    return(
      this.state.projectsClicked ? <Projects/> : <Home/>
    )
  }

  whatToShow(){
    if(this.state.resumeClicked === true){
      return <Resume/>
    }
    else if(this.state.projectsClicked === true){
      return <Projects/>
    }
    else if(this.state.contactClicked === true){
      return <Contact/>
    }
    else{
      return <Home/>
    }
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
            <button className='link' onClick={this.setProjects} >projects</button>
            <p className='link' > | </p>
            <button className='link' onClick={this.setContact}>contact</button>
          </nav>
        </header>
        <div className='body'>
          {this.whatToShow()}
        </div>
      </div>
    )
  }
}
