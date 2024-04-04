import './App.css';
import NavNar from './NavBar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/songs')
    .then(resp => resp.json())
    .then(json => setSongs(json))
  },[])

  // console.log(songs)

  return (
    <div className="App">
      <header >
        <NavNar/>
      </header>
      <Outlet context={songs}/>
    </div>
  );
}

export default App;
