import React,{useState, useEffect} from 'react';
import './App.css'
import Hotel from './components/Hotel'
import LoadingMask from './components/LoadingMask'

const App = () => {

  const [loadMask, setLoadMask] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  },[]);


  const fetchData = () => {
    fetch('api/hotels')
    .then(response => response.json())
    .then(d => {
      console.log(d)
      setData(d)
      setLoadMask(false)
    });
  }

  return (
    <div className="App">

      { loadMask && <LoadingMask />}
      { data &&  data.map((d, i) => <Hotel hotel={d} key={i} />)}

    </div>
  )
}

export default App
