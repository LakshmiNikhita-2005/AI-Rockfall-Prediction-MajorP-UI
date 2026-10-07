// import {
//     ShieldCheck
// } from "lucide-react";


// function Header() {

//     return (

//         <header className="header">

//             <div>

//                 <span className="header-location">
//                     OPEN-PIT MINE MONITORING
//                 </span>

//             </div>


//             <div className="header-right">

//                 <div className="system-status">

//                     <span></span>

//                     System Active

//                 </div>


//                 <div className="header-user">

//                     <ShieldCheck size={17} />

//                     <span>
//                         Safety Control
//                     </span>

//                 </div>

//             </div>

//         </header>
//     );
// }


// export default Header;
import React from "react";
import { Bell, Settings, ShieldCheck } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div>
        <h1>Rockfall Risk Monitoring</h1>
        <p>AI-Based Open-Pit Mine Safety Dashboard</p>
      </div>

      <div className="header-actions">

        <div className="header-status">
          <ShieldCheck size={18} />
          <span>AI System Active</span>
        </div>

        <button className="icon-button">
          <Bell size={20} />
        </button>

        <button className="icon-button">
          <Settings size={20} />
        </button>

      </div>

    </header>
  );
}

export default Header;