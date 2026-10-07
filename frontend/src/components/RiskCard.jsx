// import {
//     AlertTriangle,
//     ShieldAlert
// } from "lucide-react";


// function RiskCard({ risk }) {

//     return (

//         <div className="metric-card risk-card">

//             <div className="metric-header">

//                 <span>
//                     Overall Rockfall Risk
//                 </span>

//                 <ShieldAlert size={20} />

//             </div>


//             <div className="risk-score">

//                 {risk.score}%

//             </div>


//             <div className="risk-level">

//                 <AlertTriangle size={14} />

//                 {risk.level} Risk

//             </div>


//             <p className="metric-description">

//                 Highest risk detected in
//                 <strong> {risk.zone}</strong>

//             </p>


//             <div className="risk-progress">

//                 <div
//                     style={{
//                         width: `${risk.score}%`
//                     }}
//                 ></div>

//             </div>

//         </div>
//     );
// }


// export default RiskCard;
import React from "react";

function RiskCard({ title, value, subtitle, type }) {
  return (
    <div className={`risk-card ${type || ""}`}>

      <div className="risk-card-header">
        <span>{title}</span>
      </div>

      <div className="risk-value">
        {value}
      </div>

      <div className="risk-subtitle">
        {subtitle}
      </div>

    </div>
  );
}

export default RiskCard;