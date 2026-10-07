// import {
//     AlertTriangle,
//     CheckCircle
// } from "lucide-react";


// function AlertPanel({ alerts }) {

//     return (

//         <div className="panel">

//             <div className="panel-header">

//                 <div>

//                     <h2>
//                         Recent Alerts
//                     </h2>

//                     <p>
//                         Automated monitoring events
//                     </p>

//                 </div>

//                 <AlertTriangle size={20} />

//             </div>


//             <div className="alerts-list">

//                 {alerts.map((alert) => (

//                     <div
//                         className="alert-item"
//                         key={alert.id}
//                     >

//                         <div
//                             className={`alert-icon ${alert.severity.toLowerCase()}`}
//                         >

//                             {alert.severity === "Low"
//                                 ? <CheckCircle size={17} />
//                                 : <AlertTriangle size={17} />
//                             }

//                         </div>


//                         <div className="alert-content">

//                             <div className="alert-title">

//                                 {alert.zone}

//                                 <span>
//                                     {alert.severity}
//                                 </span>

//                             </div>

//                             <p>
//                                 {alert.message}
//                             </p>

//                             <small>
//                                 {alert.time}
//                             </small>

//                         </div>

//                     </div>

//                 ))}

//             </div>

//         </div>
//     );
// }


// export default AlertPanel;

// import React from "react";
// import { AlertTriangle, CheckCircle } from "lucide-react";

// function AlertPanel() {
//   return (
//     <div className="alert-panel">

//       <div className="card-title">
//         <AlertTriangle size={20} />
//         <span>Recent Alerts</span>
//       </div>

//       <div className="alert-item high">

//         <AlertTriangle size={18} />

//         <div>
//           <strong>High Risk Zone Detected</strong>
//           <p>Sector B-12 · 8 minutes ago</p>
//         </div>

//       </div>

//       <div className="alert-item medium">

//         <AlertTriangle size={18} />

//         <div>
//           <strong>Ground Movement Increased</strong>
//           <p>Sector C-04 · 21 minutes ago</p>
//         </div>

//       </div>

//       <div className="alert-item safe">

//         <CheckCircle size={18} />

//         <div>
//           <strong>Monitoring Normal</strong>
//           <p>Sector A-02 · 35 minutes ago</p>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default AlertPanel;

import React from "react";
import {
  AlertTriangle,
  CheckCircle
} from "lucide-react";


function AlertPanel({ alerts = [] }) {

  return (
    <div className="alert-panel">

      <div className="card-title">

        <AlertTriangle size={20} />

        <span>
          Recent Alerts
        </span>

      </div>


      {alerts.map((alert) => (

        <div
          className={`alert-item ${
            alert.type.toLowerCase()
          }`}
          key={alert.id}
        >

          {alert.type === "LOW" ? (
            <CheckCircle size={18} />
          ) : (
            <AlertTriangle size={18} />
          )}


          <div>

            <strong>
              {alert.title}
            </strong>

            <p>
              {alert.zone} · {alert.time}
            </p>

            <p>
              {alert.message}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}


export default AlertPanel;