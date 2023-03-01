import React from 'react';
import Forecast from './Components/Forecast';
import Inputs from './Components/Inputs';
import TempratureAndDetails from './Components/TempratureAndDetails';
import TimeAndLocation from './Components/TimeAndLocation';
import TopButtons from './Components/TopButtons';
import getFormatteredWeatherData from './Services/weatherServices';

// components


const App = () => {

      const fetchWeather = async () => {
       const data = await getFormatteredWeatherData({q:'london'})
       console.log(data)
      }

      fetchWeather();


  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempratureAndDetails />

      <Forecast title="Hourly forecast" />
      <Forecast title="daily forecast" />
    </div>

  );
};

export default App;
