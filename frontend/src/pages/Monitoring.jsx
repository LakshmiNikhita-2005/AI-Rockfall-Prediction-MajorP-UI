// function Monitoring() {

//     return (

//         <div className="dashboard">

//             <div className="dashboard-header">

//                 <div>

//                     <div className="page-label">
//                         LIVE MONITORING
//                     </div>

//                     <h1>
//                         Mine Monitoring
//                     </h1>

//                     <p>
//                         Real-time sensor monitoring module
//                     </p>

//                 </div>

//             </div>


//             <div className="panel">

//                 <h2>
//                     Sensor Monitoring
//                 </h2>

//                 <p style={{ color: "#71859a" }}>
//                     Sensor integration will be connected
//                     to the real monitoring pipeline here.
//                 </p>

//             </div>

//         </div>
//     );
// }


// export default Monitoring;

import React, { useEffect, useState } from "react";
import { getZones } from "../services/api";


function Monitoring() {

  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadZones() {

      try {

        const data = await getZones();

        setZones(data.zones);

      } catch (error) {

        console.error(
          "Unable to load monitoring zones",
          error
        );

      } finally {

        setLoading(false);

      }

    }


    loadZones();

  }, []);


  return (

    <section className="dashboard">

      <div className="page-heading">

        <div>

          <h2>
            Live Monitoring
          </h2>

          <p>
            Current condition of monitored mine zones
          </p>

        </div>

        <div className="live-indicator">
          ● Monitoring Active
        </div>

      </div>


      {loading ? (

        <div className="page-loading">
          Loading monitoring zones...
        </div>

      ) : (

        <div className="zone-grid">

          {zones.map((zone) => (

            <div
              className="zone-card"
              key={zone.id}
            >

              <div className="zone-header">

                <strong>
                  Zone {zone.id}
                </strong>

                <span
                  className={`zone-status ${zone.status.toLowerCase()}`}
                >
                  {zone.status}
                </span>

              </div>


              <div className="zone-risk">

                <span>
                  Risk Probability
                </span>

                <strong>
                  {zone.risk}%
                </strong>

              </div>


              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${zone.risk}%`
                  }}
                ></div>

              </div>


              <p>
                Coordinates:{" "}
                {zone.latitude.toFixed(4)},
                {" "}
                {zone.longitude.toFixed(4)}
              </p>

            </div>

          ))}

        </div>

      )}

    </section>

  );
}


export default Monitoring;