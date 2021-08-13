import axios from "axios";
import CITIES from '../cities'



const API_KEY = "44d66f46cb89e2e484c0cfe9a25a9308"

/* const cityName = CITIESI.find(function (cInfo) {
    return cInfo.name === CITIES.trim().toLowerCase();
}); */

export const search = async (cityName) => {

    const getData  = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${CITIES[0][cityName].latitude}&lon=${CITIES[0][cityName].longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`);

    const dailyForecastList = getData.data

    return dailyForecastList
}
