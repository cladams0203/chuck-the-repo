import React from 'react'
import axios from 'axios';

export function CategoryCard(props) {
    console.log(props)

    const handleCategory = () => {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${props.item}`)
            .then(response => {
                console.log(response)
                props.setJoke(response.data)
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3 onClick={handleCategory}> {props.item} </h3>
        </div>
    )
}