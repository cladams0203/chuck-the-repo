import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { CategoryCard } from './CategoryCard';

export function CategoryList(props) {
    const [categories, setCategories] =useState()
    console.log(props)
    useEffect(() => {
        axios.get(`https://api.chucknorris.io/jokes/categories`)
            .then(response => {
                // console.log(response)
                setCategories(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(

        <div>
            {categories && categories.map((item, index) => {
                return <CategoryCard item={item} key={index} history={props.history} setJoke={props.setJoke} />
            })}
        </div>
    )
}