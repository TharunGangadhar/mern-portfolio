import React, { Component } from 'react'
import Datasciencework from './Datasciencework'
import Javawork from './Javawork'
import Sqlwork from './Sqlwork'
import Webwork from './Webwork'
import Certification from './Certification'
import './Work.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button, Icon, IconButton, Tooltip } from '@material-ui/core'
import Practice from './Practice'
export class Work extends Component {
    render() {
        return (
            <div className='work'>
                <a name='works' ></a>
                <h1>WORKS</h1>
                <h3>works i have done and doing.. </h3>
                <div className='work-list'>
                    <Webwork title='WEB WORK'  dialogtitle='WEB WORK DETAILS' />
                    <Javawork title='JAVA WORK' dialogtitle='JAVA WORK DETAILS' />
                    <Sqlwork title='SQL WORK' dialogtitle='SQL WORK DEAILS' />
                    <Datasciencework title='DATA SCIENCE WORK' dialogtitle='DATA SCIENCE WORK DETAILS' />
                    <Certification title='CERTIFICATIONS DONE' dialogtitle='CERTIFICATION DETAILS' />
                </div>
                <a name='contact'></a>
                <div className='contact'>
                    <Tooltip title='FACEBOOK'>
                        <IconButton>
                        <a href='https://www.facebook.com/TharunMGo/'><FacebookIcon id='facebook' /></a>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='GITHUB'>
                        <IconButton>
                        <a href='https://github.com/TharunGangadhar/'><GitHubIcon id='github' /></a>

                        </IconButton>
                    </Tooltip>
                    <Tooltip title='EMAIL'>
                        <IconButton>
                        <a href='mailto:tharung0512@gmail.com'><MailOutlineIcon id='email' /></a>

                        </IconButton>
                    </Tooltip>
                    <Tooltip title='INSTAGRAM'>
                        <IconButton>
                        <a href='https://www.instagram.com/tharun_g_1091/'><InstagramIcon id='insta' /></a>
                        </IconButton>
                    </Tooltip>
                </div>
                <a name='feedback'></a>
                <div className='feedback'>
                    <Practice title='SEND FEEDBACK HERE' dialogtitle='FEEDBACK' />
                </div>
            </div>
        )
    }
}

export default Work
