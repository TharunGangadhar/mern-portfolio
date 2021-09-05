import React, { Component } from 'react'
import Skilltype from './Skilltype'
import './Web.css'
export class Web extends Component {
    state ={
        title:"WEB TECHNOLOGY",
        web:['HTML','CSS','JavaScript','REACT','MATERIAL-UI']

    }
    render() {
        return (
            <div className='web'>
                <h1>{this.state.title}</h1>
                <div clasName='web-list'>
                    {this.state.web.map( (value) =>{
                        return <Skilltype value={value} />
                    })}
                </div>
            </div>
        )
    }
}

export default Web

