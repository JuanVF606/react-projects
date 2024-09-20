# Weather App with Map

This weather app fetches data from the OpenWeather API and displays it to the user. It also shows a dynamic map that updates based on the city entered by the user using the Leaflet API.

## Features

- Fetches real-time weather data from OpenWeather API.
- Displays temperature, humidity, and weather conditions.
- Interactive map that updates based on the city entered by the user.

## Technologies Used

- **React**: For building the user interface.
- **TailwindCSS**: For modern and utility-first styling.
- **OpenWeather API**: Provides real-time weather data.
- **Leaflet & React-Leaflet**: For interactive maps.

## How to Run the Project

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management.
- OpenWeather API key (you can sign up [here](https://openweathermap.org/)).
Navigate to the weather-app directory:

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/JuanVF606/react-projects.git

2. Navigate to the Weather app:
   ```bash
   cd react-projects/weather-app

3. Create a .env file in the root of the project and add your OpenWeather API key:
   ```bash
    REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
4. Install the dependencies:
   ```bash
    npm install
### Running the Project
1. Start the application:
   ```bash
    npm start
2. Open your browser and go to http://localhost:3000 to see the weather app.

### Usage
1. Enter a city name and click Get Weather to fetch current weather data.
2. The map will update to show the location of the entered city.
