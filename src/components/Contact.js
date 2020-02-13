import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    setName = (event) => {
        event.preventDefault()
        this.setState({name: event.target.value})
    }

    setEmail = (event) => {
        event.preventDefault()
        this.setState({email: event.target.value})
    }

    setMessage = (event) => {
        event.preventDefault()
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <div>
                <div className='contact-form'>
                    <form action="mailto:diana.m.miller1@gmail.com">
                        <h2 className='form'>Contact Form</h2>
                        <span className='input-form'>
                            <input type="text" placeholder='name' onChange={this.setName} required/>
                            <input type="text" placeholder='email' onChange={this.setEmail} required/>
                        </span>
                        <textarea placeholder='message' onChange={this.setMessage} required></textarea>
                        <input className='submit' type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}
