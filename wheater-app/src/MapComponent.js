// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icono personalizado para el marcador del mapa
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

const MapComponent = ({ position, weatherData }) => (
  <MapContainer
    center={position}
    zoom={13}
    className="h-[600px] w-full rounded-lg shadow-md"
    zoomControl={false} // Deshabilitar controles de zoom predeterminados
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position} icon={customIcon}>
      <Popup>
        {weatherData.name}: {weatherData.weather[0].description}
      </Popup>
    </Marker>
    <ZoomControl position="bottomright" />
  </MapContainer>
);

export default React.memo(MapComponent);
