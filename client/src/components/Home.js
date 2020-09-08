import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Letter from './Letter';

const Home = () => {
const alphabetStr = 'abcdefghijklmnopqrstuvwxyz'
const alphabet = alphabetStr.split("")
const [query, setQuery] = useState("")
const [word, setWord] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

  // axios.get(`/api/animals/?search=${query}`)
  // .then(res => {
  //   console.log(`Results for ${query} :`, res.data)
    
  // })
  // .catch(console.log)

}

const handleChange = (e) => {
  setQuery(e.target.value)
}

return (
  <>

    {alphabet.map( (letter, i) => (
      // letter
      <Letter key={i} letter={letter} query={query} setQuery={setQuery} setWord={setWord}/>
    ))}

    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={query} type="text"/>
    </form>
    {word}
      
  </>
)
}

export default Home
