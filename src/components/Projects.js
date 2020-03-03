import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className='project-body'>
               <div className='projects'>
                    <div className='single-project'>
                        <span className='title'>
                            <h2 className='project-name'>Innovate Confidence</h2>
                        </span>
                        <a href="https://github.com/diana/InnovateConfidence/tree/master/innovate-confidence">GitHub Repo</a>
                        <iframe 
                            src="https://innovate-confidence.com/home" 
                            width="1080" 
                            height="540" 
                            frameborder="0" 
                            allowfullscreen="allowfullscreen"
                            className='ic'
                            title='ic'
                        >
                        </iframe>
                    </div>
                    <div className='single-project'>
                        <span className='title'>
                            <h2 className='project-name'>InvestiQuestion</h2>
                        </span>
                        <a href="https://github.com/diana/InvestiQuestionFrontend">GitHub Repo</a>
                        <iframe 
                            src="http://localhost:3001/" 
                            width="1080" 
                            height="540" 
                            frameborder="0" 
                            allowfullscreen="allowfullscreen"
                            className='ic'
                            title='ic'
                        >
                        </iframe>
                    </div>
                    <div className='single-project'>
                        <span className='title'>
                            <h2 className='project-name'>Get Organized</h2>
                        </span>
                        <a href="https://github.com/diana/OrganizationApp">GitHub Repo</a>
                        <iframe 
                            src="https://get-organized-d93d1.firebaseapp.com/" 
                            width="1080" 
                            height="540" 
                            frameborder="0" 
                            allowfullscreen="allowfullscreen"
                            className='ic'
                            title='ic'
                        >
                        </iframe>
                    </div>                
                </div> 
            </div>
        )
    }
}
