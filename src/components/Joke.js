import React from 'react'

export function Joke(props) {
    console.log(props)
   
        return (
            <div>
               
                <img src={ props.item && props.item.icon_url} alt='The Chuck' />
                <h5> {props.item && props.item.value} </h5>
            </div>
        )
   

   
}