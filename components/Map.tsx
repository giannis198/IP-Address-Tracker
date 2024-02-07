'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

interface MapProps {
  lng: number
  lat: number
}

const customIcon = new Icon({
  iconUrl: '/icon-location.svg'
})

const Map = ({ lat, lng }: MapProps) => {
  return (
    <MapContainer center={[lat, lng]} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
