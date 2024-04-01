import { useState } from "react";

function AddSongForm(){
    const[newSong, setNewSong] = useState({
        name: "",
        artist: "",
        image: "",
        Listens: ""
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