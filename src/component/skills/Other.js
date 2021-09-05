import React, { Component } from 'react'
import Skilltype from './Skilltype'
import './Other.css'
export class Other extends Component {
    state ={
        title:"OTHER KNOWLEDGE",
        know:['DSA','GIT','Python Libraries','Basic Data Science']

    }
    render() {
        return (
            <div className='other'>
                <h1>{this.state.title}</h1>
                <div clasName='other-list'>
                    {this.state.know.map( (value) =>{
                        return <Skilltype value={value} />
                    })}
                </div>
            </div>
        )
    }
}

export default Other

