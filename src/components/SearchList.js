import React from 'react'
import { Joke } from './Joke';
import { Container } from './styles';

export function SearchList(props) {
    console.log(props)
    return (
        <Container>
            {props.jokes && props.jokes.map((item, index) => {
                return <Joke item={item} key={index} />
            })}
        </Container>
    )
}