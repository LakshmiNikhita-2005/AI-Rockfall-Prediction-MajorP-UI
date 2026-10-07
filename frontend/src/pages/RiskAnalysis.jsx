// function RiskAnalysis() {

//     return (

//         <div className="dashboard">

//             <div className="dashboard-header">

//                 <div>

//                     <div className="page-label">
//                         AI ANALYSIS
//                     </div>

//                     <h1>
//                         Risk Analysis
//                     </h1>

//                     <p>
//                         Terrain and environmental risk assessment
//                     </p>

//                 </div>

//             </div>


//             <div className="panel">

//                 <h2>
//                     Risk Prediction Engine
//                 </h2>

//                 <p style={{ color: "#71859a" }}>
//                     XGBoost-based prediction will be
//                     integrated into this module.
//                 </p>

//             </div>

//         </div>
//     );
// }


// export default RiskAnalysis;

import React, { useEffect, useState } from "react";
import { getZones } from "../services/api";


function getRiskLevel(value) {

  if (value >= 75) {
    return "HIGH";
  }

  if (value >= 50) {
    return "MEDIUM";
  }

  return "LOW";
}


function RiskAnalysis() {

  const [zones, setZones] = useState([]);


  useEffect(() => {

    async function loadData() {

      const data = await getZones();

      setZones(data.zones);

    }


    loadData();

  }, []);


  return (

    <section className="dashboard">

      <div className="page-heading">

        <div>

          <h2>
            AI Risk Analysis
          </h2>

          <p>
            Risk assessment across monitored zones
          </p>

        </div>

      </div>


      <div className="analysis-grid">

        {zones.map((zone) => {

          const riskLevel =
            getRiskLevel(zone.risk);


          return (

            <div
              className="analysis-card"
              key={zone.id}
            >

              <h3>
                Zone {zone.id}
              </h3>


              <div className="analysis-score">

                {zone.risk}%

              </div>


              <strong>
                {riskLevel} RISK
              </strong>


              <p>
                Risk score generated from
                monitoring parameters.
              </p>

            </div>

          );

        })}

      </div>

    </section>

  );
}


export default RiskAnalysis;