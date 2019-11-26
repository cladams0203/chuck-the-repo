import styled from 'styled-components';

export const Container = styled.div `
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

`
export const Card = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px black;
   
`
export const JokeText = styled.p `
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
  
`
export const Button = styled.button `
    background-color: orange;
    color: white;
    :hover {
        background-color: white;
        color: orange;
        cursor: pointer;
    }

`