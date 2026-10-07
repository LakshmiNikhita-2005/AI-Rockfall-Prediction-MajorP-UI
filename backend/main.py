# from fastapi import FastAPI, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from pathlib import Path
# import shutil
# from datetime import datetime

# app = FastAPI(
#     title="Rockfall AI",
#     description="AI-powered rockfall prediction and monitoring prototype",
#     version="1.0.0"
# )

# # ---------------------------------------------------------
# # CORS
# # ---------------------------------------------------------

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:5173",
#         "http://127.0.0.1:5173"
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ---------------------------------------------------------
# # Upload directory
# # ---------------------------------------------------------

# UPLOAD_DIR = Path("../uploads")
# UPLOAD_DIR.mkdir(exist_ok=True)


# # ---------------------------------------------------------
# # HOME
# # ---------------------------------------------------------

# @app.get("/")
# def home():
#     return {
#         "project": "Rockfall AI",
#         "status": "running",
#         "message": "Rockfall AI backend is active"
#     }


# # ---------------------------------------------------------
# # HEALTH CHECK
# # ---------------------------------------------------------

# @app.get("/api/health")
# def health_check():
#     return {
#         "status": "healthy",
#         "backend": "FastAPI",
#         "timestamp": datetime.now().isoformat()
#     }


# # ---------------------------------------------------------
# # DASHBOARD DATA
# # ---------------------------------------------------------

# @app.get("/api/dashboard")
# def get_dashboard():

#     return {

#         "mine": {
#             "name": "Open-Pit Mine — Demo Site",
#             "location": "Prototype Monitoring Area",
#             "status": "Operational"
#         },

#         "risk": {
#             "score": 78,
#             "level": "High",
#             "zone": "Zone C"
#         },

#         "terrain": {
#             "elevation": 342,
#             "slope": 38.4,
#             "aspect": 127,
#             "roughness": 0.73
#         },

#         "weather": {
#             "temperature": 28,
#             "humidity": 76,
#             "rainfall": 42,
#             "wind_speed": 18
#         },

#         "sensors": {
#             "ground_vibration": 0.82,
#             "slope_displacement": 4.2,
#             "soil_moisture": 68,
#             "rock_pressure": 72
#         },

#         "detection": {
#             "rocks_detected": 3,
#             "cracks_detected": 1,
#             "confidence": 91
#         },

#         "zones": [
#             {
#                 "name": "Zone A",
#                 "risk": 24,
#                 "level": "Low",
#                 "latitude": 17.3850,
#                 "longitude": 78.4867
#             },
#             {
#                 "name": "Zone B",
#                 "risk": 51,
#                 "level": "Moderate",
#                 "latitude": 17.3865,
#                 "longitude": 78.4880
#             },
#             {
#                 "name": "Zone C",
#                 "risk": 78,
#                 "level": "High",
#                 "latitude": 17.3880,
#                 "longitude": 78.4895
#             }
#         ],

#         "alerts": [
#             {
#                 "id": 1,
#                 "severity": "High",
#                 "zone": "Zone C",
#                 "message": "Elevated rockfall risk detected.",
#                 "time": "2 min ago"
#             },
#             {
#                 "id": 2,
#                 "severity": "Moderate",
#                 "zone": "Zone B",
#                 "message": "Terrain conditions require monitoring.",
#                 "time": "8 min ago"
#             },
#             {
#                 "id": 3,
#                 "severity": "Low",
#                 "zone": "Zone A",
#                 "message": "Environmental conditions stable.",
#                 "time": "15 min ago"
#             }
#         ],

#         "demo": True
#     }


# # ---------------------------------------------------------
# # RISK API
# # ---------------------------------------------------------

# @app.get("/api/risk")
# def calculate_risk():

#     slope = 38.4
#     rainfall = 42
#     vibration = 0.82

#     score = (
#         (slope / 45) * 40
#         + (rainfall / 100) * 35
#         + vibration * 25
#     )

#     score = round(min(score, 100))

#     if score >= 70:
#         level = "High"
#     elif score >= 40:
#         level = "Moderate"
#     else:
#         level = "Low"

#     return {
#         "score": score,
#         "level": level,
#         "demo": True
#     }


# # ---------------------------------------------------------
# # IMAGE UPLOAD
# # ---------------------------------------------------------

# @app.post("/api/detection/upload")
# async def upload_image(file: UploadFile = File(...)):

#     allowed_extensions = {
#         ".jpg",
#         ".jpeg",
#         ".png",
#         ".webp"
#     }

#     extension = Path(file.filename or "").suffix.lower()

#     if extension not in allowed_extensions:
#         return {
#             "success": False,
#             "message": "Only JPG, JPEG, PNG and WEBP images are supported."
#         }

#     filename = Path(file.filename).name

#     file_path = UPLOAD_DIR / filename

#     with file_path.open("wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     return {
#         "success": True,
#         "filename": filename,
#         "message": "Image uploaded successfully.",
#         "model_status": "YOLO model integration pending"
#     }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json


app = FastAPI(
    title="AI Rockfall Prediction & Alert System",
    description="Backend API for open-pit mine rockfall monitoring",
    version="1.0"
)


# ---------------------------------------------------------
# CORS
# ---------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------
# DATA FILE
# ---------------------------------------------------------

DATA_FILE = (
    Path(__file__).resolve().parent.parent
    / "data"
    / "demo_monitoring.json"
)


def load_data():
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


# ---------------------------------------------------------
# BASIC ROUTE
# ---------------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "Rockfall Prediction API is running",
        "status": "online"
    }


# ---------------------------------------------------------
# DASHBOARD
# ---------------------------------------------------------

@app.get("/api/dashboard")
def get_dashboard():
    data = load_data()

    return {
        "site": data["site"],
        "summary": data["summary"],
        "terrain": data["terrain"],
        "weather": data["weather"]
    }


# ---------------------------------------------------------
# RISK HISTORY
# ---------------------------------------------------------

@app.get("/api/risk-history")
def get_risk_history():
    data = load_data()

    return {
        "risk_history": data["risk_history"]
    }


# ---------------------------------------------------------
# MONITORING ZONES
# ---------------------------------------------------------

@app.get("/api/zones")
def get_zones():
    data = load_data()

    return {
        "zones": data["zones"]
    }


# ---------------------------------------------------------
# ALERTS
# ---------------------------------------------------------

@app.get("/api/alerts")
def get_alerts():
    data = load_data()

    return {
        "alerts": data["alerts"]
    }