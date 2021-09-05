import React, { Component } from 'react'
import Skilltype from './Skilltype'
import './Language.css'
export class Language extends Component {
    state ={
        title:"LANGUAGES",
        lang:['C PROGRAM','JAVA','PYTHON','MATLAB']

    }
    render() {
        return (
            <div className='language'>
                <h1>{this.state.title}</h1>
                <div clasName='language-list'>
                    {this.state.lang.map( (value) =>{
                        return <Skilltype value={value} />
                    })}
                </div>
            </div>
        )
    }
}

export default Language

