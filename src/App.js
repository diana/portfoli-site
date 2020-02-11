import React, { Component } from 'react'
import './App.css'
import Desktop from './mountains.jpg'
import Image from './me.jpeg'

export default class App extends Component {

  state = {

  }

  render() {
    const imageUrl = Desktop
    return (
      <div clasName='app' style={{backgroundImage: `url(${imageUrl})`}}>
        <header>
          <nav className='header' >
            <a href='http://localhost:3000/'>home</a>
            <p> | </p>
            <a href='http://localhost:3000/'>resume</a>
            <p> | </p>
            <a href='http://localhost:3000/'>projects</a>
            <p> | </p>
            <a href='http://localhost:3000/'>contact</a>
          </nav>
        </header>
        <div className='body' >
          <div className='image-name'>
            <div className='image'>
              <img src={Image}></img>
            </div>
            <div className='name'>
              <h1>Diana Miller</h1>
              <h3>Full Stack Developer</h3>
            </div>
          </div>
          <p className='intro'>
          Full stack engineer working through the program at Flatiron School. My background is in project coordination and office management and have pivoted into the software development field through my love of learning and problem solving. I have a strong desire to create applications to help educate people on tough social issues, in addition to creating a plethora of products for clients. As an avid team player, I look forward to creating these products and solving problems for clients with others within the software development field. I am most excited about the endless learning coding has to offer and all the different paths that lay before me.
          </p>
        </div>
      </div>
    )
  }
}
