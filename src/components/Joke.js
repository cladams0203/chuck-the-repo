import React from 'react'
import { Card, JokeText } from './styles';

export function Joke(props) {
    console.log(props)
   
        return (
            <Card>
               
                <img src={ props.item && props.item.icon_url} alt='The Chuck' />
                <JokeText> {props.item && props.item.value} </JokeText>
            </Card>
        )
   

   
}