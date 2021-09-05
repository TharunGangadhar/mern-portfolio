import React from 'react'
import Database from './Database'
import Language from './Language'
import { Other } from './Other'
import Web from './Web'
import './Skill.css'
function Skill() {
    return (
        <div className='skills'> 
            <a name='skills'></a>
            <h1>SKILLS</h1>
            <h3>skills i possess</h3>
            <div className='skill-list'>
                <Web />
                <Language />
                <Database />
                <Other />
            </div>
        </div>
    )
}

export default Skill
