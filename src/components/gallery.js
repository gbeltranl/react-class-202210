import React from 'react'
import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {CharCard} from './charCard'

export const Gallery = () => {
    const api = 'https://rickandmortyapi.com/api/character';
    let [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        fetch(api)
        .then((resp) => resp.json())
        .then((data) => setCharacters(data.results))
      }, []);
    return (
        <Row className="row">
            {characters.map((character, index) => (
                <CharCard
                name={character.name}
                image={character.image}
                gender={character.gender}
                status={character.status}/>
            ))}
        </Row>
    )
}
