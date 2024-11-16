import { useEffect, useState } from 'react'
import './App.css'
import axiosInstance from './api/axiosInstance';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend API URL
    axiosInstance
      .get("/HelloWorld")
      .then((response) => {
        setData(response.data); // Handle the data from the response
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Handle errors
        setLoading(false);
      });
  }, []); // Empty array ensures this runs only once after the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
        <h1>{data}</h1>
    </>
  )
}

export default App