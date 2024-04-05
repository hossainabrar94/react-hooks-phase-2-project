import { useState } from "react";

function AddSongForm(){
    const[newSong, setNewSong] = useState({
        name: "",
        artist: "",
        genre:"",
        image: "",
        Listens: Math.floor(Math.random() * (1000000 - 10001)) + 10001
    })

    return (
        <section>
            <h1>Add Song</h1>
            <form>
                <label>
                    Name: 
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Song Name"
                        value={newSong.name}
                    />
                </label>
                <label>
                    Artist: 
                    <input 
                        type="text"
                        name="artist"
                        placeholder="Enter Artist Name"
                        value={newSong.artist}
                    />
                </label>
                <label>
                    Genre: 
                    <input 
                        type="text"
                        name="genre"
                        placeholder="Enter Genre"
                        value={newSong.genre}
                    />
                </label>
                <label>
                    image: 
                    <input 
                        type="text"
                        name="image"
                        placeholder="Enter Image Url"
                        value={newSong.image}
                    />
                </label>
                
            </form>
        </section>
    )
}

export default AddSongForm;