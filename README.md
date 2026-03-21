# 🌤️ Weather API — Node.js Backend

A beginner-friendly Weather REST API built with **pure Node.js** (zero external packages).  
Data is fetched live from [Open-Meteo](https://open-meteo.com) — **free, no API key needed**.

---

## 📁 Folder Structure

```
weather-app/
├── server.js          ← Entry point: creates the HTTP server & routes
├── routes/
│   └── weather.js     ← All weather logic lives here
├── package.json       ← Project metadata & npm scripts
└── README.md          ← You are here
```

---

## 🚀 How to Run

### 1. Make sure Node.js is installed
```bash
node -v   # should print v18 or higher
```

### 2. Clone / download this project
```bash
cd weather-app
```

### 3. Start the server
```bash
node server.js
# or (with auto-restart on file save, Node 18+):
node --watch server.js
```

You should see:
```
==================================================
🚀  Weather API running at http://localhost:3000
📡  Try: http://localhost:3000/weather?lat=23.25&lon=77.41
==================================================
```

### 4. Test it in your browser or with curl
```bash
# Bhopal, India
curl "http://localhost:3000/weather?lat=23.25&lon=77.41"

# New York, USA
curl "http://localhost:3000/weather?lat=40.71&lon=-74.01"

# London, UK
curl "http://localhost:3000/weather?lat=51.51&lon=-0.13"
```

---

## 📡 API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Welcome message & usage info |
| GET | `/weather?lat=&lon=` | Get current weather |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lat` | number | ✅ Yes | Latitude  (-90 to 90) |
| `lon` | number | ✅ Yes | Longitude (-180 to 180) |

---

## 📦 Sample Response

```json
{
  "location": {
    "latitude": 23.25,
    "longitude": 77.41,
    "timezone": "Asia/Kolkata"
  },
  "current_weather": {
    "time": "2024-06-01T14:00",
    "temperature_c": 38.2,
    "feels_like_c": 41.5,
    "wind_speed_kmh": 12.4,
    "wind_direction": "SW",
    "condition": "Clear sky",
    "weather_code": 0,
    "humidity_percent": 28
  },
  "today": {
    "total_precipitation_mm": 0,
    "sunrise": "2024-06-01T05:41",
    "sunset": "2024-06-01T19:08"
  },
  "source": "Open-Meteo (https://open-meteo.com)"
}
```

---

## ❌ Error Responses

| Status | Scenario | Example message |
|--------|----------|----------------|
| 400 | Missing lat/lon | "Missing query parameters." |
| 400 | Non-numeric values | "lat and lon must be valid numbers." |
| 400 | Out of range | "lat must be between -90 and 90." |
| 404 | Unknown route | "Route not found." |
| 502 | Open-Meteo unreachable | "Failed to fetch weather data..." |

---

## 🧠 Step-by-Step Code Explanation

### `server.js`
1. **Import modules** — `http` creates a server; `url` parses query strings.
2. **createServer** — registers a callback that fires for every request.
3. **Parse URL** — splits `/weather?lat=23.25&lon=77.41` into pathname + query object.
4. **Route matching** — `if (pathname === "/weather")` sends the request to `weatherHandler`.
5. **listen** — binds the server to port 3000.

### `routes/weather.js`
1. **Validate inputs** — checks that `lat`/`lon` exist, are numbers, and are in range.
2. **Build API URL** — constructs the Open-Meteo query string with the variables we want.
3. **fetchJSON** — uses Node's built-in `https.get()` to stream the response body, then `JSON.parse()` it.
4. **Shape response** — picks only the useful fields (temperature, condition, humidity…) into a clean object.
5. **WMO code map** — translates numeric weather codes (e.g. `0`) into readable text (`"Clear sky"`).
6. **degreesToCompass** — turns `225` degrees into `"SW"` using simple math.

---

## 💡 No npm install required!
This project uses **only Node.js built-in modules**:
- `http` — HTTP server
- `https` — outgoing HTTPS requests
- `url` — URL/query string parsing

Zero dependencies = nothing to install. Just `node server.js` and go.
