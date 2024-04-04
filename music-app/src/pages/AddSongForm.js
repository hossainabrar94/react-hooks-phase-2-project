import { useState } from "react";

function AddSongForm(){
    const[newSong, setNewSong] = useState({
        name: "",
        artist: "",
        genre:"",
        image: "",
        bio: "",
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
                
            </form>
        </section>
    )
}

export default AddSongForm;