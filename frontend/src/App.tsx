import axios from 'axios'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';



function App() {
  const [details, setDetails] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/index/")
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
        <Route 
            path='/table' element={<MainPage details={details}/>}
        />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
