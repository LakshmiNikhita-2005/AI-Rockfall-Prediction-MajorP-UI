// function Alerts() {

//     return (

//         <div className="dashboard">

//             <div className="dashboard-header">

//                 <div>

//                     <div className="page-label">
//                         SAFETY EVENTS
//                     </div>

//                     <h1>
//                         Alerts
//                     </h1>

//                     <p>
//                         Rockfall risk and hazard notifications
//                     </p>

//                 </div>

//             </div>


//             <div className="panel">

//                 <h2>
//                     Alert Management
//                 </h2>

//                 <p style={{ color: "#71859a" }}>
//                     Automated alert management will be
//                     connected here.
//                 </p>

//             </div>

//         </div>
//     );
// }


// export default Alerts;

import React, { useEffect, useState } from "react";
import { getAlerts } from "../services/api";


function Alerts() {

  const [alerts, setAlerts] = useState([]);


  useEffect(() => {

    async function loadAlerts() {

      try {

        const data = await getAlerts();

        setAlerts(data.alerts);

      } catch (error) {

        console.error(error);

      }

    }


    loadAlerts();

  }, []);


  return (

    <section className="dashboard">

      <div className="page-heading">

        <div>

          <h2>
            Alert Center
          </h2>

          <p>
            Rockfall and terrain instability alerts
          </p>

        </div>

      </div>


      <div className="alerts-page">

        {alerts.map((alert) => (

          <div
            className={`full-alert ${alert.type.toLowerCase()}`}
            key={alert.id}
          >

            <div>

              <strong>
                {alert.title}
              </strong>

              <span>
                Zone {alert.zone}
              </span>

            </div>


            <p>
              {alert.message}
            </p>


            <small>
              {alert.time}
            </small>

          </div>

        ))}

      </div>

    </section>

  );
}


export default Alerts;