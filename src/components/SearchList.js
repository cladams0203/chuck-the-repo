import React from 'react'
import { Joke } from './Joke';

export function SearchList(props) {
    console.log(props)
    return (
        <div>
            {props.jokes && props.jokes.map((item, index) => {
                return <Joke item={item} key={index} />
            })}
        </div>
    )
}