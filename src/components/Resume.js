import React, { Component } from 'react'


export default class Resume extends Component {
    render() {
        return (
            <div className='resume-page'>
                <div className='resume'>
                    <span className='resume-intro'>
                        <h2>Diana Miller</h2>
                        <h4 className='phone'>720-422-6262</h4>
                        <span className='websites'>
                            <a href='https://github.com/diana'>github </a>
                            <p className='break'> | </p>
                            <a href='https://medium.com/@diana.mm'> blog </a>
                            <p className='break'> | </p>
                            <a href='https://www.linkedin.com/in/diana-mm'> linkedin</a>
                        </span>
                    </span>
                    <span>
                        <h4 className='job-title'>Full Stack Software Developer</h4>
                        <p>Experienced in Ruby on Rails and JavaScript based programming and a background in project coordination, office management, and human resources. Demonstrates exceptional organizational skills to manage resources, focus teams, and increase project flow. Possess strong skills in problem sliving and optimizing pliicy and procedure that helped Home Depot increase productivity by over 15%.</p>
                    </span>
                    <span>
                        <h4>TECHNICAL SKILLS</h4>
                        <p>React including Redux, Vue including Vuex and Vue Router, Ruby, Rails, SQL, Javascript, Java, PostgresQL, SQL</p>
                    </span>
                    <span>
                        <h4>TECHNICAL PROJECTS</h4>
                        <span className='project'>
                            <h5>Innovate Confidence - </h5>
                            <a className='project-links' href='https://github.com/diana/Innovate-Confidence'>Github</a>
                            <p className='break'> | </p>
                            <a className='project-links' href='https://innovate-confidence.com/home'>Deployed</a>
                        </span>
                        <p>A platform to create and track training games for your employees. Make learning fun again for everyone!</p>
                        <ul>
                            <li>Utilizes Vue, Vuex, & Vue-Routed with Ruby on Rails backend</li>
                            <li>Employs JavaScript fetch calls to GET, POST, PATCH, and DELETE user inputs to the backend</li>
                            <li>Allows creation of unique urls when game created so that players do not need an account to play</li>
                            <li>Uses full functionality of Vuex and Vue-Router</li>
                        </ul>
                        <span className='project'>
                            <h5>Organization App: </h5>
                            <a className='project-links' href='https://github.com/diana-mm/OrganizationApp'>Github</a>
                            <p className='break'> | </p>
                            <a className='project-links' href='https://get-organized-d93d1.firebaseapp.com/index.html'>Deployed</a>
                        </span>
                        <p>Get Organized is a self-help app for users to track home organization projects.</p>
                        <ul>
                            <li>App is deployed on firebase and has had over 10 users.</li>
                            <li>Uses Ruby on Rails API to store data on each room, task, and relationships between room and task.</li>
                            <li>Employs JavaScript fetch calls to GET, POST, PATCH, and DELETE user inputs to the backend.</li>
                            <li>Utilizes CSS to create a clean and appealing web design.</li>
                        </ul>
                        <span className='project'>
                            <h5>Trading Cards: </h5>
                            <a className='project-links' href='https://github.com/diana-mm/tradingCards'>Github</a>
                            <p className='break'> | </p>
                            <a className='project-links' href='https://youtu.be/2gsJPWASqIk'>Demo</a>
                        </span>
                        <p>An app where a user can see cards with famous scientists and trade with others on the app.</p>
                        <ul>
                            <li>Uses Ruby on Rails API to store information on each card, user, and users cards.</li>
                            <li>Employs JavaScript fetch calls to GET, POST, PATCH, and DELETE user inputs to the backend.</li>
                            <li>Utilizes CSS to create a clean and appealing web design.</li>
                            <li>Made effective use of paired programming to brainstorm ideas and troubleshoot features.</li>
                        </ul>
                    </span>
                    <span>
                        <h4>EXPERIENCE</h4>
                        <span className='jobs'>
                            <h5>Project Coordinator, Joya Sliutions, Denver, CO</h5>
                            <p>07/2017 - Present</p>
                        </span>
                        <ul>
                            <li>Create and maintain social media marketing and website design.</li>
                            <li>Coordinate, organize, and manage multiple events monthly of over 50 attendees.</li>
                            <li>Manage training and scheduling of vliunteers using signup.com.</li>
                            <li>Teach weekly aerial classes, emphasizing positive student experience, resulting in a 5% increase in attendees.</li>
                            <li>Utilize Slack, Trello, and WildApricot to manage and facilitate events, vliunteers, and programming.</li>
                        </ul>
                        <span className='jobs'>
                            <h5>Office Manager, Home Depot, Wheat Ridge, CO</h5>
                            <p>08/2009 - 10/2020</p>
                        </span>
                        <ul>
                            <li>Managed onboarding of new hires, including sales, installation management, and admin teams.</li>
                            <li>Gathered relevant information for building permit acquisition with jurisdiction throughout Cliorado.</li>
                            <li>Liaison for facilities maintenance, including negotiating new contracts which saved the company 20% in cost.</li>
                            <li>Maintained office technliogy including iPhones, iPads, PCs, and office phones.</li>
                            <li>Exceptional customer service skills which increased customer retention by 10%</li>
                        </ul>
                    </span>
                    <span>
                        <h4>EDUCATION</h4>
                        <span className='jobs'>
                            <h5>Flatiron School</h5>
                            <p>10/2019 - 01/20202</p>
                        </span>
                        <p>Full Stack Web Development, Ruby on Rails and JavaScript program</p>
                        <span  className='jobs'>
                            <h5>Metro State University</h5>
                            <p>2015</p>
                        </span>
                        <p>Major: Physics, Mathematics</p>
                    </span>
                </div>
            </div>
        )
    }
}
