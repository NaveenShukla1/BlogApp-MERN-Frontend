import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Create from './components/Create';
import Post from './components/Post';
import EditPost from './components/EditPost';

//to read the user info
export const userContext = createContext()

function App() {
  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true;
  useEffect(() => {
    // getting the user information
    axios.get('https://blog-app-mern-backend.vercel.app/')
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <userContext.Provider value={user}>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/post/:id' element={<Post/>} />
          <Route path='/editPost/:id' element={<EditPost/>} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
