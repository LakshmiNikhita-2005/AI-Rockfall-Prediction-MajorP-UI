// import {
//     Mountain
// } from "lucide-react";


// function TerrainCard({ terrain }) {

//     return (

//         <div className="metric-card">

//             <div className="metric-header">

//                 <span>
//                     Terrain Condition
//                 </span>

//                 <Mountain size={20} />

//             </div>


//             <div className="metric-number">

//                 {terrain.slope}°

//             </div>


//             <div className="metric-label">
//                 Average Slope
//             </div>


//             <div className="terrain-mini">

//                 <div>
//                     <span>Elevation</span>
//                     <strong>
//                         {terrain.elevation} m
//                     </strong>
//                 </div>

//                 <div>
//                     <span>Aspect</span>
//                     <strong>
//                         {terrain.aspect}°
//                     </strong>
//                 </div>

//             </div>

//         </div>
//     );
// }


// export default TerrainCard;
// import React from "react";
// import { Mountain } from "lucide-react";

// function TerrainCard() {
//   return (
//     <div className="info-card">

//       <div className="card-title">
//         <Mountain size={20} />
//         <span>Terrain Condition</span>
//       </div>

//       <div className="terrain-value">
//         68%
//       </div>

//       <p>Terrain stability index</p>

//       <div className="progress-bar">
//         <div
//           className="progress-fill"
//           style={{ width: "68%" }}
//         ></div>
//       </div>

//       <span className="card-note">
//         Moderate slope instability detected
//       </span>

//     </div>
//   );
// }

// export default TerrainCard;
import React from "react";
import { Mountain } from "lucide-react";


function TerrainCard({ terrain }) {

  return (
    <div className="info-card">

      <div className="card-title">
        <Mountain size={20} />
        <span>Terrain Condition</span>
      </div>


      <div className="terrain-value">
        {terrain.stability_index}%
      </div>


      <p>
        Terrain stability index
      </p>


      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${terrain.stability_index}%`
          }}
        ></div>

      </div>


      <div className="terrain-details">

        <div>
          <span>Slope</span>
          <strong>
            {terrain.slope_angle}°
          </strong>
        </div>


        <div>
          <span>Elevation</span>
          <strong>
            {terrain.elevation} m
          </strong>
        </div>


        <div>
          <span>Movement</span>
          <strong>
            {terrain.ground_movement} mm
          </strong>
        </div>

      </div>

    </div>
  );
}


export default TerrainCard;