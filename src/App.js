import Header from './compontents/Header';
import ComingWeather from './compontents/ComingWeather';
import './compontents/styles/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

// http://api.weatherapi.com/v1/current.json?key=e951c7d161764171ace132934232201&q=Stockholm
//e951c7d161764171ace132934232201

function App() {

  const [search, setSearch] = useState('');

  return (
   <div>
    <Header setSearch={setSearch} />
    <ComingWeather search={search} />
   </div>
  );
}

export default App;
