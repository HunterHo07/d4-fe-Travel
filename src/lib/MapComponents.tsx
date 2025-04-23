import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet icon issues
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponents = () => {
  console.log('🚀 Map component rendered');

  return (
    <MapContainer
      center={[3.1579, 101.7120]}
      zoom={16}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[3.1579, 101.7120]} icon={icon}>
        <Popup>
          <div className="font-semibold">Jebsen Travel & Tours</div>
          <div className="text-sm">Suite 22.01, Level 22, Menara Citibank</div>
          <div className="text-sm">165, Jalan Ampang</div>
          <div className="text-sm">50450 Kuala Lumpur, Malaysia</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponents;
