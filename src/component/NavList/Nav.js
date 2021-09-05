import { Avatar ,Tooltip} from '@material-ui/core'
import React, { Component } from 'react'
import './Nav.css'
export class Nav extends Component {
    state ={
        title:'THARUN G',
        home:'HOME',
        about:'ABOUT',
        skills:'SKILL',
        works:'WORK',
        contact:'CONTACT',
        feedback:'FEEDBACK'
    }
    render() {
        return (
            <div className='nav sticky'>
                <div className='nav-name'>
                    <Avatar >TG</Avatar>
                    <h1>{this.state.title}</h1>
                </div>
                <div className='nav-link'>
                    <Tooltip title='HOME'>
                        <a  id='link' href='#home'>{this.state.home}</a>
                    </Tooltip>
                    <Tooltip title='ABOUT'>
                        <a  id='link'  href='#about'>{this.state.about}</a>
                    </Tooltip>
                    <Tooltip title='SKILLS'>
                        <a  id='link'  href='#skills'>{this.state.skills}</a>
                    </Tooltip>
                    <Tooltip title='WORKS'>
                        <a  id='link'  href='#works'>{this.state.works}</a>
                    </Tooltip>
                    <Tooltip title='CONTACT'>
                        <a   id='link' href='#contact'>{this.state.contact}</a>
                    </Tooltip>
                    <Tooltip title='FEEDBACK'>
                        <a  id='link'  href='#feedback'>{this.state.feedback}</a>
                    </Tooltip>
                </div>
            </div>
        )
    }
}

export default Nav
