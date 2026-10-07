const API_BASE_URL = "http://127.0.0.1:8000";


async function fetchAPI(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status}`
    );
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