import React, {Component} from 'react'


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
                <h1 className='number'>1</h1>
                <h1 className='name'>Name</h1>
                <h2 className='from'>from</h2>
                <h2 className='title'>title</h2>
                <h2 className='employer'>employer</h2>
                <h2 className="movies">Favorite movies</h2>
            </div>
        )
    }
}

export default Info