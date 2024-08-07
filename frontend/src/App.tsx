import axios from 'axios'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import AuthorDetails from './components/AuthorDetails';
import BookPage from './components/BookPage';



function App() {
  const [details, setDetails] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then(res => {
        setDetails(res.data)
      })
      .catch(error =>{
        console.error(error)
      });
  }, []);


  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/author' element={<AuthorDetails details={details} />}/>
        <Route path="/book/:id" element={<BookPage details={details}/>} />
        <Route 
            path='/table' element={<MainPage details={details}/>}
        />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
