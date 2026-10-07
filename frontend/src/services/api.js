// const API_BASE_URL = "http://127.0.0.1:8000";

// export async function getDashboardData() {
//     const response = await fetch(
//         `${API_BASE_URL}/api/dashboard`
//     );

//     if (!response.ok) {
//         throw new Error("Failed to load dashboard data");
//     }

//     return response.json();
// }


// export async function getRiskData() {
//     const response = await fetch(
//         `${API_BASE_URL}/api/risk`
//     );

//     if (!response.ok) {git commit -m "Initial commit - Major Project UI"
//         throw new Error("Failed to load risk data");
//     }

//     return response.json();
// }


// export async function checkBackendHealth() {
//     const response = await fetch(
//         `${API_BASE_URL}/api/health`
//     );

//     if (!response.ok) {
//         throw new Error("Backend unavailable");
//     }

//     return response.json();
// }


// export async function uploadDetectionImage(file) {

//     const formData = new FormData();

//     formData.append("file", file);

//     const response = await fetch(
//         `${API_BASE_URL}/api/detection/upload`,
//         {
//             method: "POST",
//             body: formData
//         }
//     );

//     if (!response.ok) {
//         throw new Error("Image upload failed");
//     }

//     return response.json();
// }

const API_BASE_URL = "http://127.0.0.1:8000";

async function fetchAPI(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export function getDashboard() {
  return fetchAPI("/api/dashboard");
}

export function getRiskHistory() {
  return fetchAPI("/api/risk-history");
}

export function getZones() {
  return fetchAPI("/api/zones");
}

export function getAlerts() {
  return fetchAPI("/api/alerts");
}