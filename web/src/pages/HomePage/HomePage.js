import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import AppLayout from 'src/layouts/AppLayout'

const HomePage = () => {
  const state = {
    lat: 51.05011,
    lng: -114.08529,
    zoom: 10,
  }
  const position = [state.lat, state.lng]

  return (
    <AppLayout>
      <Map center={position} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </AppLayout>
  )
}

export default HomePage
