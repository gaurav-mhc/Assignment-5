import React, { Component } from 'react'
import './CharacterStyle.css'
class MakeAPICall extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             characters: []
        }
    }
    async componentDidMount(){
        const url = 'https://finalspaceapi.com/api/v0/character/';
        const res = await fetch(url);
        const characters = await res.json();
        this.setState({ characters: characters});
    }
    render() {
        const {characters} = this.state;
        return (
            <>
                <h1 className="header">Final Space API</h1>
                <div className ="container">
                    
                    {characters && characters.length && characters.map(character => <div className = "character-card" key ={character.id}>
                        <div className = "character-image"><img src={character.img_url} alt={character.name}></img></div>
                        <h2 className = "character-name">{character.name}</h2>
                        <p className = "character-gender">{character.gender}</p>
                    </div>)}
                </div>
            </>
        )
    }
}

export default MakeAPICall