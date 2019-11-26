import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Search } from './components/Search';
import { CategoryList } from './components/CategoryList';
import { Joke } from './components/Joke';


import './App.css';

function App() {
  const [joke, setJoke] = useState()
  console.log(joke)
  return (
    <div className="App">
      <h1>Chuck Chuckles</h1>
      <Route path='/' render={(props) => <Nav {...props} setJoke={setJoke} />} />
      <Route path='/' component= {Search} />
      <Route path='/category-list' render={(props) => <CategoryList {...props} setJoke={setJoke} />} />
      {joke && <Joke item={joke} />}
      
    </div>
  );
}

export default App;
