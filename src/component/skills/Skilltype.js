import React, { Component } from 'react'
import './Skilltype'
export class Skilltype extends Component {
    render() {
        return (
            <div className='skilltype'>
                <p className='para'>{this.props.value}</p>
            </div>
        )
    }
}

export default Skilltype
