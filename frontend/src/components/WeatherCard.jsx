// import {
//     CloudRain,
//     Thermometer,
//     Wind
// } from "lucide-react";


// function WeatherCard({ weather }) {

//     return (

//         <div className="metric-card">

//             <div className="metric-header">

//                 <span>
//                     Weather Conditions
//                 </span>

//                 <CloudRain size={20} />

//             </div>


//             <div className="metric-number">

//                 {weather.rainfall}

//                 <small> mm</small>

//             </div>


//             <div className="metric-label">
//                 Rainfall
//             </div>


//             <div className="weather-mini">

//                 <div>

//                     <Thermometer size={14} />

//                     <span>
//                         {weather.temperature}°C
//                     </span>

//                 </div>


//                 <div>

//                     <Wind size={14} />

//                     <span>
//                         {weather.wind_speed} km/h
//                     </span>

//                 </div>

//             </div>

//         </div>
//     );
// }


// export default WeatherCard;

// import React from "react";
// import { CloudRain } from "lucide-react";

// function WeatherCard() {
//   return (
//     <div className="info-card">

//       <div className="card-title">
//         <CloudRain size={20} />
//         <span>Weather Conditions</span>
//       </div>

//       <div className="weather-main">
//         <strong>24°C</strong>
//         <span>Rainfall: 12 mm</span>
//       </div>

//       <div className="weather-details">
//         <div>
//           <span>Humidity</span>
//           <strong>78%</strong>
//         </div>

//         <div>
//           <span>Wind</span>
//           <strong>18 km/h</strong>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default WeatherCard;

import React from "react";
import { CloudRain } from "lucide-react";


function WeatherCard({ weather }) {

  return (
    <div className="info-card">

      <div className="card-title">
        <CloudRain size={20} />

        <span>
          Weather Conditions
        </span>
      </div>


      <div className="weather-main">

        <strong>
          {weather.temperature}°C
        </strong>

        <span>
          Rainfall: {weather.rainfall} mm
        </span>

      </div>


      <div className="weather-details">

        <div>
          <span>Humidity</span>

          <strong>
            {weather.humidity}%
          </strong>
        </div>


        <div>
          <span>Wind</span>

          <strong>
            {weather.wind_speed} km/h
          </strong>
        </div>

      </div>

    </div>
  );
}


export default WeatherCard;