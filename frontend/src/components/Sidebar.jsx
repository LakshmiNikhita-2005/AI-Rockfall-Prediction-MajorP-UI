// import {
//     LayoutDashboard,
//     Activity,
//     ShieldAlert,
//     Bell,
//     Mountain
// } from "lucide-react";


// function Sidebar({
//     activePage,
//     setActivePage
// }) {

//     const items = [

//         {
//             id: "dashboard",
//             label: "Dashboard",
//             icon: LayoutDashboard
//         },

//         {
//             id: "monitoring",
//             label: "Monitoring",
//             icon: Activity
//         },

//         {
//             id: "risk",
//             label: "Risk Analysis",
//             icon: ShieldAlert
//         },

//         {
//             id: "alerts",
//             label: "Alerts",
//             icon: Bell
//         }

//     ];


//     return (

//         <aside className="sidebar">

//             <div className="brand">

//                 <div className="brand-icon">

//                     <Mountain size={24} />

//                 </div>


//                 <div>

//                     <h2>
//                         Rockfall AI
//                     </h2>

//                     <span>
//                         Mine Safety System
//                     </span>

//                 </div>

//             </div>


//             <nav>

//                 {items.map((item) => {

//                     const Icon = item.icon;

//                     return (

//                         <button
//                             key={item.id}
//                             className={
//                                 activePage === item.id
//                                     ? "nav-item active"
//                                     : "nav-item"
//                             }
//                             onClick={() =>
//                                 setActivePage(item.id)
//                             }
//                         >

//                             <Icon size={18} />

//                             {item.label}

//                         </button>

//                     );

//                 })}

//             </nav>


//             <div className="sidebar-footer">

//                 <div className="system-indicator"></div>

//                 <div>

//                     <strong>
//                         System Online
//                     </strong>

//                     <span>
//                         Monitoring active
//                     </span>

//                 </div>

//             </div>

//         </aside>
//     );
// }


// export default Sidebar;

// import React from "react";
// import {
//   LayoutDashboard,
//   Activity,
//   AlertTriangle,
//   Map,
//   BarChart3,
// } from "lucide-react";

// function Sidebar() {
//   return (
//     <aside className="sidebar">

//       <div className="sidebar-logo">
//         <div className="logo-icon">⛰</div>

//         <div>
//           <h2>RockGuard AI</h2>
//           <span>Mine Safety System</span>
//         </div>
//       </div>

//       <nav className="sidebar-nav">

//         <div className="nav-item active">
//           <LayoutDashboard size={20} />
//           <span>Dashboard</span>
//         </div>

//         <div className="nav-item">
//           <Activity size={20} />
//           <span>Live Monitoring</span>
//         </div>

//         <div className="nav-item">
//           <Map size={20} />
//           <span>Risk Analysis</span>
//         </div>

//         <div className="nav-item">
//           <BarChart3 size={20} />
//           <span>Risk Trends</span>
//         </div>

//         <div className="nav-item">
//           <AlertTriangle size={20} />
//           <span>Alerts</span>
//         </div>

//       </nav>

//       <div className="sidebar-footer">
//         <div className="system-dot"></div>
//         <div>
//           <strong>System Online</strong>
//           <span>Monitoring active</span>
//         </div>
//       </div>

//     </aside>
//   );
// }

// export default Sidebar;

import React from "react";

import {
  LayoutDashboard,
  Activity,
  AlertTriangle,
  Map,
  BarChart3
} from "lucide-react";


function Sidebar({
  currentPage,
  onNavigate
}) {


  const navigation = [

    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard
    },

    {
      id: "monitoring",
      label: "Live Monitoring",
      icon: Activity
    },

    {
      id: "risk",
      label: "Risk Analysis",
      icon: Map
    },

    {
      id: "alerts",
      label: "Alerts",
      icon: AlertTriangle
    }

  ];


  return (

    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-icon">
          ⛰
        </div>

        <div>

          <h2>
            RockGuard AI
          </h2>

          <span>
            Mine Safety System
          </span>

        </div>

      </div>


      <nav className="sidebar-nav">

        {navigation.map((item) => {

          const Icon = item.icon;


          return (

            <button
              key={item.id}
              className={`nav-item ${
                currentPage === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                onNavigate(item.id)
              }
            >

              <Icon size={20} />

              <span>
                {item.label}
              </span>

            </button>

          );

        })}

      </nav>


      <div className="sidebar-footer">

        <div className="system-dot"></div>

        <div>

          <strong>
            System Online
          </strong>

          <span>
            Monitoring active
          </span>

        </div>

      </div>

    </aside>

  );
}


export default Sidebar;