import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function AddSongForm(){

    const {songs, setSongs} = useOutletContext()

    const[newSong, setNewSong] = useState({
        name: "",
        artist: "",
        genre:"",
        image: "",
        listens: Math.floor(Math.random() * (1000000 - 10001)) + 10001
    })
    
    function handleChange(e){
        setNewSong({
            ...newSong,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch('http://localhost:3000/songs' ,{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: newSong.name,
                artist: newSong.artist,
                genre: newSong.genre,
                image: newSong.image,
                listens: newSong.listens
            })
        })
        .then(resp => resp.json())
        .then(json => setSongs([...songs, json]))
    }

    return (
        <section>
            <h1>Add Song</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Song Name"
                        value={newSong.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Artist: 
                    <input 
                        type="text"
                        name="artist"
                        placeholder="Enter Artist Name"
                        value={newSong.artist}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Genre: 
                    <input 
                        type="text"
                        name="genre"
                        placeholder="Enter Genre"
                        value={newSong.genre}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    image: 
                    <input 
                        type="text"
                        name="image"
                        placeholder="Enter Image Url"
                        value={newSong.image}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <button type="submit">Add to Library</button>
            </form>
        </section>
    )
}

export default AddSongForm;