import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Joke } from './Joke'
import { SearchList } from './SearchList';
import { Route } from 'react-router-dom';
export function Search(props) {
    const [form, setForm] = useState('')
    const [jokes, setJokes] = useState()
    // console.log(jokes)


    return(
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                axios.get(`https://api.chucknorris.io/jokes/search?query=${form}`)
                    .then(response => {
                        setJokes(response.data.result)
                        props.history.push('/search')
                    })
                    .catch(err => console.log(err))
            }}>
                <input
                    name='form'
                    placeholder='Search'
                    onChange={(event) => {
                        setForm( event.target.value)
                    }}
                    value={form}
                />
                
                <button type='submit'>Search</button>
            </form>
            {/* {jokes && jokes.map((item, index) => {
                return <Joke item={item} key={index} />
            })} */}
            <Route exact path='/search' render={(props) => <SearchList {...props} jokes={jokes}/>} />
        </div>

    )
}