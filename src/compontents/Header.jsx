import './styles/style.css'
import { useEffect, useState } from 'react'
const Header = ({setSearch}) => {

    const[apiData, setApiData] = useState();
    const[search, setSearchValue] = useState();
    
    const date = new Date(apiData && Date.parse(apiData.location.localtime) || new Date());
    
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    useEffect(() => {
        const fetchData = async ()=>{
          
          let params = new URLSearchParams()
            params.append('key', "e951c7d161764171ace132934232201");
            params.append('q', search);
          
            try{
            const res = await fetch(`http://api.weatherapi.com/v1/current.json?${params}`);
            const jsonData = await res.json();
            if(res.ok){
                setApiData(jsonData);

            };
        }
        catch(error){
            console.log(error);
        }
        }
        
        fetchData()
    }, [search])

  return (
    <div className="box">
      <h1 className='focus-in-expand-fwd'>Weather <span>App</span></h1>
      <input className='slide-in-fwd-bottom' type="text" placeholder='search city' name='search'
      onChange={(e) => {
          setSearchValue(e.target.value);
          setSearch(e.target.value);
        }
      } 
      value={search} />

      {apiData? <div className='displayData'>
        <img src={apiData.current.condition.icon} alt="image" />
        <p><span>City:</span> {apiData.location.name}</p>
        <p><span>Country:</span> {apiData.location.country}</p>
        <p><span>Temp: </span>{apiData.current.temp_c}°C</p>
        <p><span>Date: </span>{year}-{month}1-{day}</p>
        <p><span>Time: </span>{hours}:{minutes}</p>
        </div>
      : <p></p>}

    </div>
  )
}

export default Header
