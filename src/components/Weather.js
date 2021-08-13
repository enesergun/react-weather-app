import React from 'react'
import { useContext, useEffect } from "react"
import WeatherContext from '../context/WeatherContext'
import { search } from './GetCity'

import CITIES from '../cities'


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function Weather() {
    const { city,setWeatherInfo, weatherInfo } = useContext(WeatherContext);

    const dayArray = weatherInfo.daily.map((d)=> {
        const date = new Date(d.dt * 1000)
        return date
    })

    const daysShort = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"];

   const currentDay = new Date(weatherInfo.current.dt * 1000)
   console.log("current", currentDay.getDate())
   console.log( dayArray[0].getDate())
   
    
    
    
    useEffect(() => {
        search(city).then( (dailyForecastList) => setWeatherInfo(dailyForecastList))
    }, [city, setWeatherInfo ])
    
    return (
        <div className="container">
            
            <div className="days">
                {
                    weatherInfo.daily.map((day, i) => (
                        <div className={currentDay.getDate() === dayArray[i].getDate() ? "day current" : "day"} key={i}>
                            <div className="dayName">{daysShort[dayArray[i].getDay()]}</div>
                            <div className="weatherIcon">
                                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className="temps">
                                <div className="max">{parseInt(day.temp.max)}°</div>
                                <div className="min">{parseInt(day.temp.min)}°</div>
                            </div>
                        </div>
                    ) )
                }
                 

              
            </div>
            
             
            
             
            
        </div>
    )
}

export default Weather
