// import { useEffect, useState } from "react";

// import {
//     getDashboardData,
//     uploadDetectionImage
// } from "../services/api";

// import RiskCard from "../components/RiskCard";
// import RiskChart from "../components/RiskChart";
// import TerrainCard from "../components/TerrainCard";
// import WeatherCard from "../components/WeatherCard";
// import MapView from "../components/MapView";
// import AlertPanel from "../components/AlertPanel";

// import {
//     Upload,
//     RefreshCw,
//     Activity
// } from "lucide-react";


// function Dashboard() {

//     const [data, setData] = useState(null);

//     const [loading, setLoading] = useState(true);

//     const [error, setError] = useState("");

//     const [uploadMessage, setUploadMessage] = useState("");


//     async function loadData() {

//         try {

//             setLoading(true);

//             setError("");

//             const result = await getDashboardData();

//             setData(result);

//         } catch (error) {

//             console.error(error);

//             setError(
//                 "Unable to connect to the FastAPI backend."
//             );

//         } finally {

//             setLoading(false);
//         }
//     }


//     useEffect(() => {

//         loadData();

//     }, []);


//     async function handleUpload(event) {

//         const file = event.target.files[0];

//         if (!file) {
//             return;
//         }

//         try {

//             setUploadMessage("Uploading image...");

//             const result =
//                 await uploadDetectionImage(file);

//             setUploadMessage(
//                 result.message
//             );

//         } catch (error) {

//             setUploadMessage(
//                 "Image upload failed."
//             );
//         }
//     }


//     if (loading) {

//         return (
//             <div className="page-loading">

//                 <Activity
//                     size={32}
//                     className="loading-icon"
//                 />

//                 <p>
//                     Loading Rockfall AI monitoring system...
//                 </p>

//             </div>
//         );
//     }


//     if (error) {

//         return (
//             <div className="error-page">

//                 <h2>
//                     Rockfall AI
//                 </h2>

//                 <p>
//                     {error}
//                 </p>

//                 <button
//                     className="primary-button"
//                     onClick={loadData}
//                 >
//                     <RefreshCw size={16} />
//                     Retry Connection
//                 </button>

//             </div>
//         );
//     }


//     return (

//         <div className="dashboard">

//             {/* PAGE HEADER */}

//             <div className="dashboard-header">

//                 <div>

//                     <div className="page-label">
//                         MINE OPERATIONS
//                     </div>

//                     <h1>
//                         Monitoring Dashboard
//                     </h1>

//                     <p>
//                         AI-powered rockfall prediction
//                         and terrain monitoring
//                     </p>

//                 </div>


//                 <div className="dashboard-actions">

//                     <div className="live-status">

//                         <span></span>

//                         SYSTEM ACTIVE

//                     </div>


//                     <button
//                         className="refresh-button"
//                         onClick={loadData}
//                     >

//                         <RefreshCw size={15} />

//                         Refresh

//                     </button>

//                 </div>

//             </div>


//             {/* ERROR */}

//             {error && (

//                 <div className="error-banner">
//                     {error}
//                 </div>

//             )}


//             {/* TOP CARDS */}

//             <div className="dashboard-grid top-cards">

//                 <RiskCard
//                     risk={data.risk}
//                 />

//                 <TerrainCard
//                     terrain={data.terrain}
//                 />

//                 <WeatherCard
//                     weather={data.weather}
//                 />

//                 <div className="metric-card">

//                     <div className="metric-title">
//                         Hazard Detection
//                     </div>

//                     <div className="metric-number">
//                         {data.detection.rocks_detected}
//                     </div>

//                     <div className="metric-description">
//                         Rock formations detected
//                     </div>

//                     <div className="confidence">

//                         AI Confidence

//                         <strong>
//                             {data.detection.confidence}%
//                         </strong>

//                     </div>

//                 </div>

//             </div>


//             {/* MAP + RISK CHART */}

//             <div className="dashboard-grid main-panels">

//                 <div className="panel map-panel">

//                     <div className="panel-header">

//                         <div>

//                             <h2>
//                                 Mine Risk Zones
//                             </h2>

//                             <p>
//                                 Spatial risk visualization
//                             </p>

//                         </div>

//                         <span className="demo-badge">
//                             DEMO DATA
//                         </span>

//                     </div>


//                     <MapView
//                         zones={data.zones}
//                     />

//                 </div>


//                 <div className="panel">

//                     <div className="panel-header">

//                         <div>

//                             <h2>
//                                 Risk Analysis
//                             </h2>

//                             <p>
//                                 Current environmental
//                                 indicators
//                             </p>

//                         </div>

//                     </div>


//                     <RiskChart
//                         data={data}
//                     />

//                 </div>

//             </div>


//             {/* BOTTOM */}

//             <div className="dashboard-grid bottom-panels">

//                 <AlertPanel
//                     alerts={data.alerts}
//                 />


//                 <div className="panel">

//                     <div className="panel-header">

//                         <div>

//                             <h2>
//                                 AI Hazard Detection
//                             </h2>

//                             <p>
//                                 Upload mine imagery
//                             </p>

//                         </div>

//                         <Upload size={20} />

//                     </div>


//                     <div className="upload-area">

//                         <Upload size={30} />

//                         <h3>
//                             Upload Mine Image
//                         </h3>

//                         <p>
//                             JPG, PNG or WEBP
//                         </p>


//                         <label className="upload-button">

//                             <Upload size={15} />

//                             Choose Image

//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleUpload}
//                             />

//                         </label>


//                         {uploadMessage && (

//                             <div className="upload-message">

//                                 {uploadMessage}

//                             </div>

//                         )}

//                     </div>

//                 </div>

//             </div>


//             {/* FOOTER */}

//             <div className="dashboard-footer">

//                 <span>
//                     Rockfall AI • Engineering Major Project
//                 </span>

//                 <span>
//                     Prototype monitoring system
//                 </span>

//             </div>

//         </div>
//     );
// }


// export default Dashboard;
import React, { useEffect, useState } from "react";
import RiskCard from "../components/RiskCard";
import TerrainCard from "../components/TerrainCard";
import WeatherCard from "../components/WeatherCard";
import RiskChart from "../components/RiskChart";
import AlertPanel from "../components/AlertPanel";
import { getDashboard, getRiskHistory, getAlerts } from "../services/api";


function Dashboard() {

  const [dashboard, setDashboard] = useState(null);
  const [riskHistory, setRiskHistory] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {

    async function loadDashboard() {

      try {

        setLoading(true);

        const dashboardData = await getDashboard();
        const historyData = await getRiskHistory();
        const alertsData = await getAlerts();

        setDashboard(dashboardData);
        setRiskHistory(historyData.risk_history);
        setAlerts(alertsData.alerts);

        setError("");

      } catch (err) {

        console.error(err);

        setError(
          "Unable to connect to the monitoring backend."
        );

      } finally {

        setLoading(false);

      }
    }


    loadDashboard();

  }, []);


  if (loading) {

    return (
      <div className="page-loading">
        Loading monitoring data...
      </div>
    );

  }


  if (error) {

    return (
      <div className="page-error">
        <h2>Backend Connection Error</h2>
        <p>{error}</p>
        <p>
          Make sure FastAPI is running on port 8000.
        </p>
      </div>
    );

  }


  return (
    <section className="dashboard">

      <div className="page-heading">

        <div>
          <h2>Mine Safety Dashboard</h2>

          <p>
            {dashboard.site.name} · {dashboard.site.location}
          </p>
        </div>

        <div className="live-indicator">
          ● Live Data
        </div>

      </div>


      <div className="risk-grid">

        <RiskCard
          title="Current Risk"
          value={dashboard.summary.current_risk}
          subtitle="AI predicted rockfall risk"
          type="high"
        />


        <RiskCard
          title="Risk Probability"
          value={`${dashboard.summary.risk_probability}%`}
          subtitle="Prediction probability"
          type="warning"
        />


        <RiskCard
          title="Active Zones"
          value={dashboard.summary.active_zones}
          subtitle="Zones requiring attention"
          type="danger"
        />


        <RiskCard
          title="Monitoring Status"
          value={dashboard.summary.monitoring_status}
          subtitle="Real-time monitoring"
          type="safe"
        />

      </div>


      <div className="top-grid">

        <TerrainCard
          terrain={dashboard.terrain}
        />

        <WeatherCard
          weather={dashboard.weather}
        />

      </div>


      <div className="bottom-grid">

        <RiskChart
          values={riskHistory}
        />

        <AlertPanel
          alerts={alerts}
        />

      </div>

    </section>
  );
}

export default Dashboard;