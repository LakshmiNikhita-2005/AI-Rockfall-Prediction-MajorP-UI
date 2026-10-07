// import React from "react";

// import {
//     useState
// } from "react";

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";

// import Dashboard from "./pages/Dashboard";
// import Monitoring from "./pages/Monitoring";
// import RiskAnalysis from "./pages/RiskAnalysis";
// import Alerts from "./pages/Alerts";

// import "./App.css";


// function App() {

//     const [activePage, setActivePage] =
//         useState("dashboard");


//     function renderPage() {

//         switch (activePage) {

//             case "monitoring":
//                 return <Monitoring />;

//             case "risk":
//                 return <RiskAnalysis />;

//             case "alerts":
//                 return <Alerts />;

//             default:
//                 return <Dashboard />;

//         }
//     }


//     return (

//         <div className="app">

//             <Sidebar
//                 activePage={activePage}
//                 setActivePage={setActivePage}
//             />


//             <main className="main-content">

//                 <Header />

//                 {renderPage()}

//             </main>

//         </div>
//     );
// }


// export default App;
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <h1>AI-Based Rockfall Prediction & Alert System</h1>
//       <p>Major Project Dashboard</p>
//       <p className="status">Frontend is working successfully!</p>
//     </div>
//   );
// }

// export default App;
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <h1>AI-Based Rockfall Prediction & Alert System</h1>

//       <p>Major Project Dashboard</p>

//       <p className="status">
//         Frontend is working successfully!
//       </p>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <h1>AI-Based Rockfall Prediction & Alert System</h1>

//       <p>
//         AI-powered monitoring dashboard for open-pit mine rockfall risk
//         assessment.
//       </p>

//       <div className="status">
//         System Online
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import RiskCard from "./components/RiskCard";
// import TerrainCard from "./components/TerrainCard";
// import WeatherCard from "./components/WeatherCard";
// import RiskChart from "./components/RiskChart";
// import AlertPanel from "./components/AlertPanel";

// function App() {
//   return (
//     <div className="app-layout">

//       <Sidebar />

//       <main className="main-content">

//         <Header />

//         <section className="dashboard">

//           {/* Risk summary */}
//           <div className="risk-grid">

//             <RiskCard
//               title="Current Risk"
//               value="HIGH"
//               subtitle="AI predicted rockfall risk"
//               type="high"
//             />

//             <RiskCard
//               title="Risk Probability"
//               value="78%"
//               subtitle="Prediction confidence"
//               type="warning"
//             />

//             <RiskCard
//               title="Active Zones"
//               value="03"
//               subtitle="Zones requiring attention"
//               type="danger"
//             />

//             <RiskCard
//               title="Monitoring Status"
//               value="ONLINE"
//               subtitle="Real-time monitoring active"
//               type="safe"
//             />

//           </div>

//           {/* Main information */}
//           <div className="top-grid">

//             <TerrainCard />

//             <WeatherCard />

//           </div>

//           {/* Chart + Alerts */}
//           <div className="bottom-grid">

//             <RiskChart />

//             <AlertPanel />

//           </div>

//         </section>

//       </main>

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import RiskAnalysis from "./pages/RiskAnalysis";
import Alerts from "./pages/Alerts";


function App() {

  const [currentPage, setCurrentPage] =
    useState("dashboard");


  function renderPage() {

    switch (currentPage) {

      case "monitoring":
        return <Monitoring />;

      case "risk":
        return <RiskAnalysis />;

      case "alerts":
        return <Alerts />;

      case "dashboard":
      default:
        return <Dashboard />;

    }

  }


  return (

    <div className="app-layout">

      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />


      <main className="main-content">

        <Header />


        {renderPage()}


      </main>

    </div>

  );
}


export default App;