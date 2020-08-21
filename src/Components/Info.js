import React, {Component} from 'react'
import Data from '../Data'


class Info extends Component {
    constructor(){
        super()

        this.state = {
            id: 0,
            name: { first: "", last: "" },
            city: "",
            country: "",
            employer: "",
            title: "",
            favoriteMovies: ["", "", ""]
        }
    }

    render(){
        return (
            <div className='info'>
                <span className='number'>1</span>
                <span className='name'></span>
                <span className='from'>From:{this.state.city}</span>
                <span className='title'>Job Title:</span>
                <span className='employer'>Employer:</span>
                <span className="movies">Favorite Movies:</span>
                <ol className ='list'>
                    <li>Dark Knight</li>
                </ol>
            </div>
        )
    }
}

export default Info