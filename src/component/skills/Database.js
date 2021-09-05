import React, { Component } from 'react'
import Skilltype from './Skilltype'
import './Database.css'
export class Database extends Component {
    state ={
        title:"DATABASES",
        data:['DBMS','RDBMS','SQL','MONGODB',]

    }
    render() {
        return (
            <div className='database'>
                <h1>{this.state.title}</h1>
                <div clasName='database-list'>
                    {this.state.data.map( (value) =>{
                        return <Skilltype value={value} />
                    })}
                </div>
            </div>
        )
    }
}

export default Database

