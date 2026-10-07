import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


function getRiskColor(level) {

    if (level === "High") {
        return "#ff6b6b";
    }

    if (level === "Moderate") {
        return "#f4c95d";
    }

    return "#69db9b";
}


function MapView({ zones }) {

    return (

        <div className="map-container">

            <MapContainer
                center={[17.3865, 78.488]}
                zoom={15}
                scrollWheelZoom={false}
                style={{
                    height: "100%",
                    width: "100%"
                }}
            >

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {zones.map((zone) => (

                    <CircleMarker
                        key={zone.name}
                        center={[
                            zone.latitude,
                            zone.longitude
                        ]}
                        radius={16}
                        pathOptions={{
                            color: getRiskColor(
                                zone.level
                            ),
                            fillColor: getRiskColor(
                                zone.level
                            ),
                            fillOpacity: 0.75
                        }}
                    >

                        <Popup>

                            <strong>
                                {zone.name}
                            </strong>

                            <br />

                            Risk:
                            {" "}
                            {zone.risk}%

                            <br />

                            Level:
                            {" "}
                            {zone.level}

                        </Popup>

                    </CircleMarker>

                ))}

            </MapContainer>


            <div className="map-legend">

                <div>
                    <span className="legend-dot low"></span>
                    Low
                </div>

                <div>
                    <span className="legend-dot moderate"></span>
                    Moderate
                </div>

                <div>
                    <span className="legend-dot high"></span>
                    High
                </div>

            </div>

        </div>
    );
}


export default MapView;