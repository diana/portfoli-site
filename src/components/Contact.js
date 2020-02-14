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

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3002/send',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
          if (response.status === 'success'){
            alert("Message Sent.") 
            window.location.reload();
          }else if(response.status === 'fail'){
            alert("Message failed to send.")
          }
        })
    }

    render() {
        return (
            <div className='contact'>
                <div className='contact-form'>
                    <form onSubmit={this.handleSubmit}>
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
