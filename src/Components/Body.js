import React, {Component} from 'react'
import Info from './Info'

class Body extends Component {
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div className='body'>
                <Info />
                <div className='buttons'>
                    <button className='previous'>&laquo; Previous</button>
                    <div className='midButtons'>
                        <button className='edit'>Edit</button>
                        <button className='delete'>Delete</button>
                        <button className='new'>New</button>
                    </div>
                    <button className='next'>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default Body