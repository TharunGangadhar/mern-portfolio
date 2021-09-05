import { Tooltip } from '@material-ui/core'
import React from 'react'
import './About.css'
function About() {
    return (
        <div className='about'>
            <a name='about'></a>
            <h1>ABOUT ME</h1>
            <p>some details about me</p>
            <div className='school study'>
                <h2>schooling at</h2>
                <h4>st thomas school melur</h4>
            </div>
            <div className='college study'>
                <h2>college at</h2>
                <h4>sbgns rural comp. pu college</h4>
            </div>
            <div className='degree study'>
                <h2>degree at</h2>
                <h4>University Visvesvaraya College of Engineering</h4>
            </div>
            <div className='other-about'>
                <Tooltip title="CLICK ME">
                    <a className='other-link' href='#skills'>view my skills here</a>
                </Tooltip>
                <Tooltip title='CLICK ME' >
                    <a className=' other-link' href='#works'>view my works here</a>

                </Tooltip>
                
            </div>
        </div>
    )
}

export default About
