// import {
//     CloudRain,
//     Mountain,
//     Activity
// } from "lucide-react";


// function RiskChart({ data }) {

//     return (

//         <div className="risk-analysis">

//             <div className="analysis-item">

//                 <div className="analysis-icon slope">
//                     <Mountain size={18} />
//                 </div>

//                 <div className="analysis-info">

//                     <div className="analysis-top">

//                         <span>
//                             Terrain Slope
//                         </span>

//                         <strong>
//                             {data.terrain.slope}°
//                         </strong>

//                     </div>

//                     <div className="analysis-bar">

//                         <div
//                             style={{
//                                 width: `${Math.min(
//                                     data.terrain.slope / 45 * 100,
//                                     100
//                                 )}%`
//                             }}
//                         />

//                     </div>

//                 </div>

//             </div>


//             <div className="analysis-item">

//                 <div className="analysis-icon rainfall">
//                     <CloudRain size={18} />
//                 </div>

//                 <div className="analysis-info">

//                     <div className="analysis-top">

//                         <span>
//                             Rainfall
//                         </span>

//                         <strong>
//                             {data.weather.rainfall} mm
//                         </strong>

//                     </div>

//                     <div className="analysis-bar">

//                         <div
//                             style={{
//                                 width:
//                                     `${data.weather.rainfall}%`
//                             }}
//                         />

//                     </div>

//                 </div>

//             </div>


//             <div className="analysis-item">

//                 <div className="analysis-icon vibration">
//                     <Activity size={18} />
//                 </div>

//                 <div className="analysis-info">

//                     <div className="analysis-top">

//                         <span>
//                             Ground Vibration
//                         </span>

//                         <strong>
//                             {data.sensors.ground_vibration}
//                         </strong>

//                     </div>

//                     <div className="analysis-bar">

//                         <div
//                             style={{
//                                 width:
//                                     `${data.sensors.ground_vibration * 100}%`
//                             }}
//                         />

//                     </div>

//                 </div>

//             </div>


//             <div className="risk-summary">

//                 <span>
//                     Current assessment
//                 </span>

//                 <strong>
//                     {data.risk.level} Risk
//                 </strong>

//             </div>

//         </div>
//     );
// }


// export default RiskChart;

// import React from "react";

// function RiskChart() {
//   const values = [42, 48, 45, 58, 63, 72, 68, 81, 76, 85, 79, 88];

//   return (
//     <div className="chart-card">

//       <div className="chart-header">
//         <div>
//           <h3>Rockfall Risk Trend</h3>
//           <p>Last 12 monitoring intervals</p>
//         </div>

//         <span className="chart-badge">
//           LIVE
//         </span>
//       </div>

//       <div className="bar-chart">

//         {values.map((value, index) => (
//           <div className="bar-wrapper" key={index}>

//             <div
//               className="chart-bar"
//               style={{ height: `${value}%` }}
//               title={`Risk: ${value}%`}
//             ></div>

//             <span>{index + 1}</span>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default RiskChart;

import React from "react";


function RiskChart({ values = [] }) {

  return (
    <div className="chart-card">

      <div className="chart-header">

        <div>
          <h3>
            Rockfall Risk Trend
          </h3>

          <p>
            Recent monitoring intervals
          </p>
        </div>

        <span className="chart-badge">
          LIVE
        </span>

      </div>


      <div className="bar-chart">

        {values.map((value, index) => (

          <div
            className="bar-wrapper"
            key={index}
          >

            <div
              className="chart-bar"
              style={{
                height: `${value}%`
              }}
              title={`Risk: ${value}%`}
            ></div>


            <span>
              {index + 1}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}


export default RiskChart;