import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export function Nav(props) {


    return(
        <div>
            <a>Category List</a>
            <a>Fun Facts</a>
            <Link to='/'
                onClick={() => {
                    axios.get(`https://api.chucknorris.io/jokes/random`)
                        .then(response => {
                            console.log(response)
                            props.setJoke(response.data)
                        })
                        .catch(err => console.log(err))
                }}
            >Random Joke</Link>
        </div>
    )
}