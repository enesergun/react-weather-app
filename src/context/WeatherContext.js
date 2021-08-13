import { createContext, useState } from "react";
import { search } from '../components/GetCity'



const WeatherContext = createContext(null);


export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState("ankara");
    const [weatherInfo, setWeatherInfo] = useState({"lat":39.9255,"lon":32.8663,"timezone":"Europe/Istanbul","timezone_offset":10800,"current":{"dt":1628676537,"sunrise":1628650589,"sunset":1628700668,"temp":298.61,"feels_like":298.07,"pressure":1011,"humidity":33,"dew_point":281.18,"uvi":8.26,"clouds":94,"visibility":10000,"wind_speed":5.92,"wind_deg":341,"wind_gust":6.53,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},"daily":[{"dt":1628586000,"sunrise":1628564132,"sunset":1628614343,"moonrise":1628569980,"moonset":1628619540,"moon_phase":0.06,"temp":{"day":301.61,"min":289.62,"max":302.73,"night":293.04,"eve":300.83,"morn":289.62},"feels_like":{"day":300.45,"night":292.65,"eve":300.02,"morn":289.36},"pressure":1013,"humidity":27,"dew_point":280.82,"wind_speed":8.25,"wind_deg":353,"wind_gust":8.68,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":39,"pop":0.03,"uvi":7.94},{"dt":1628672400,"sunrise":1628650589,"sunset":1628700668,"moonrise":1628660460,"moonset":1628707560,"moon_phase":0.1,"temp":{"day":297.94,"min":290.16,"max":300.32,"night":292.45,"eve":298.3,"morn":290.16},"feels_like":{"day":297.47,"night":292.03,"eve":297.81,"morn":289.72},"pressure":1012,"humidity":38,"dew_point":281.71,"wind_speed":6.2,"wind_deg":346,"wind_gust":8.16,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":94,"pop":0.07,"uvi":8.14},{"dt":1628758800,"sunrise":1628737047,"sunset":1628786992,"moonrise":1628751000,"moonset":1628795520,"moon_phase":0.13,"temp":{"day":296.72,"min":289.19,"max":299.07,"night":292.61,"eve":298.46,"morn":289.19},"feels_like":{"day":296.41,"night":292.28,"eve":298.12,"morn":289.07},"pressure":1014,"humidity":49,"dew_point":284.47,"wind_speed":7.58,"wind_deg":16,"wind_gust":9.55,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":89,"pop":0.4,"rain":0.82,"uvi":7.65},{"dt":1628845200,"sunrise":1628823505,"sunset":1628873315,"moonrise":1628841540,"moonset":1628883540,"moon_phase":0.17,"temp":{"day":292.07,"min":290.86,"max":295.1,"night":291.63,"eve":292.59,"morn":291.29},"feels_like":{"day":291.71,"night":291.15,"eve":292.18,"morn":290.96},"pressure":1017,"humidity":65,"dew_point":284.63,"wind_speed":5.67,"wind_deg":24,"wind_gust":9.92,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":97,"pop":0.26,"rain":0.23,"uvi":4.25},{"dt":1628931600,"sunrise":1628909963,"sunset":1628959637,"moonrise":1628932140,"moonset":1628971740,"moon_phase":0.2,"temp":{"day":297.58,"min":289.07,"max":298.66,"night":293.61,"eve":297.82,"morn":289.07},"feels_like":{"day":297.31,"night":293.28,"eve":297.47,"morn":288.7},"pressure":1014,"humidity":47,"dew_point":284.68,"wind_speed":6.06,"wind_deg":8,"wind_gust":7.05,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":53,"pop":0.2,"rain":0.19,"uvi":8.62},{"dt":1629018000,"sunrise":1628996420,"sunset":1629045957,"moonrise":1629022920,"moonset":1629060120,"moon_phase":0.25,"temp":{"day":298.18,"min":287.84,"max":301.52,"night":297.14,"eve":299.66,"morn":287.84},"feels_like":{"day":297.84,"night":296.9,"eve":299.66,"morn":287.61},"pressure":1013,"humidity":42,"dew_point":283.71,"wind_speed":5.4,"wind_deg":354,"wind_gust":6.59,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":9},{"dt":1629104400,"sunrise":1629082878,"sunset":1629132277,"moonrise":1629113700,"moonset":0,"moon_phase":0.28,"temp":{"day":300.45,"min":291.3,"max":300.45,"night":296.69,"eve":298.77,"morn":291.3},"feels_like":{"day":300.24,"night":296.54,"eve":298.59,"morn":291.21},"pressure":1013,"humidity":40,"dew_point":284.97,"wind_speed":5,"wind_deg":12,"wind_gust":8.79,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":3,"pop":0.04,"uvi":9},{"dt":1629190800,"sunrise":1629169336,"sunset":1629218595,"moonrise":1629204480,"moonset":1629148860,"moon_phase":0.31,"temp":{"day":301.83,"min":290.22,"max":304.59,"night":298.29,"eve":303.75,"morn":290.22},"feels_like":{"day":301,"night":297.88,"eve":302.4,"morn":290.02},"pressure":1013,"humidity":34,"dew_point":283.69,"wind_speed":8.27,"wind_deg":47,"wind_gust":9.07,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":9}]});
    /* const [error, setError] = useState(null); */


    const values = {
        city,
        setCity,
        weatherInfo,
        setWeatherInfo,
    };

    if (weatherInfo === []) {
        search(city).then( (dailyForecastList) => setWeatherInfo(dailyForecastList))
    }
    
    

    // api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test
    // https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}

    


    

    /* useEffect(() => {
        const ankara = CITIES.find(c => {
            return c.name === "ankara";
        });
        fetchWeather(ankara);
    }, []) */

    console.log(city)
    console.log(weatherInfo)


    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export default WeatherContext
