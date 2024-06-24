import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from './components/Table';
import HomePage from './pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';



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
            path='/table' element={<Table details={details}/>}
        />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
