import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'
import tharun from '../images/tharun.jpg'
import './Body.css'
const useStyles = makeStyles((theme)=>({
    large:{
        width:theme.spacing(20),
        height:theme.spacing(20),
        boxShadow:'1px 1px 100px 5px white',
    }
}))

function Body() {
    const  classes = useStyles();
    return (
        <div className='body'>
            <a name='home'></a>
            <Avatar src={tharun} className={classes.large}></Avatar>
            <h4>My name is,</h4>
            <h1><em>THARUN</em> <strong>GANGADHAR</strong><span>!</span></h1>
            <h3>And I'am a <span>STUDENT</span></h3>
        </div>
    )
}

export default Body
