import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Letter = ({query, letter, ...props}) => {
  const [ animals, setAnimals ] = useState([])
  const [ animal, setAnimal ] = useState(null)

  useEffect(() => {
    axios.get(`/api/animals/?search=${letter}&depth=${1}`)
    .then(res => {
      console.log(`Results for ${letter} :`, res.data)
      setAnimals(res.data)
    })
    .catch(console.log)

  },[])

  useEffect(() =>{
    
    switch(query.length) {
      case (query.length):

        if (query.length > 0){
          axios.get(`/api/animals/?search=${query + letter}&depth=${query.length + 1}`)
          .then(res => {
            console.log(`Results for ${query + letter} :`, res.data)
            setAnimals(res.data)
          })
          .catch(console.log)
        }     

        console.log("Query Length", query.length)
      break;
    }
    
  }, [query])

  useEffect(() => {
    if (animals.length > 1) {
      setAnimal(animals[Math.floor(Math.random() * animals.length)])
    } else {
      setAnimal(animals[0])
    }

  }, [animals])


  const handleClick = () => {
    if (query + letter == animal.name){
      console.log("YOU GOT A", query)
      props.setWord(query+letter)
    } else {
      props.setQuery(query+letter)
    }
  }

  return (
    <button onClick={handleClick}>
      {letter}
      {animal && <img src={`/image/${animal.url}`}/>}
    </button>
    
  ) 

}

export default Letter