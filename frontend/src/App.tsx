import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/')
    .then(response => {
      console.log(response.data);
      setData(response.data);
      setLoading(false); // Set loading to false once data is fetched
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
      setLoading(false);
    });
}, []);

if (loading) {
  return <div>Loading...</div>;
}

}

export default App;
