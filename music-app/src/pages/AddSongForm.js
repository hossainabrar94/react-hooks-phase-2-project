import { useState } from "react";

function AddSongForm(){
    const[newSong, setNewSong] = useState({
        name: "",
        artist: "",
        genre:"",
        image: "",
        Listens: Math.floor(Math.random() * (1000000 - 10001)) + 10001
    })
    
    function handleChange(e){
        setNewSong({
            ...newSong,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(){

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