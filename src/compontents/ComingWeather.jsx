import './styles/style.css'
import { useEffect, useState } from 'react';

const ComingWeather = ({search}) => {

    const[apiData, setApiData] = useState();
  
    useEffect(() => {
        const fetchData = async ()=>{
          
          let params = new URLSearchParams()
          params.append('key', "e951c7d161764171ace132934232201");
          params.append('q', search);
          params.append('days', '6')

            try{
                const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?${params}`);
                const jsonData = await res.json();
                console.log(jsonData);
                if(res.ok){
                    setApiData(jsonData);
                }
              }
            catch(error){
                console.log(error);
            }}
        
        fetchData();
    }, [search])

  return (
<div className="daysBox">
  {apiData ? (
    <div className='fiveDays'>
      {apiData.forecast.forecastday.slice(1).map((day, index) => {
        const date = new Date(day.date);
        const dayNum = date.toLocaleString('default', { weekday: 'long' });
        return (
          <div key={index}>
            <div>
              <p><span2>{dayNum}</span2></p>
              <img src={day.day.condition.icon} alt="image" />
              <p><span3>Max: </span3><br />{day.day.maxtemp_c}°C</p>
              <p><span4>Min: </span4><br />{day.day.mintemp_c}°C</p>
            </div>          
          </div>
        )
      })}
    </div>
        ) : (
            <p></p>
        )}
    </div>
  )
}

export default ComingWeather
