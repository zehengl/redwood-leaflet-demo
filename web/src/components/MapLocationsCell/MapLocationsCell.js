import { Link, routes } from '@redwoodjs/router'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

export const customIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/feathericons/feather/master/icons/map-pin.svg',
  iconRetinaUrl:
    'https://raw.githubusercontent.com/feathericons/feather/master/icons/map-pin.svg',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [15, 40],
})

export const QUERY = gql`
  query {
    locations {
      id
      latitude
      longitude
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="bg-gray-50">
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        No Location yet...
        <br />
        <span className="text-indigo-600">Create one?</span>
      </h2>
      <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            to={routes.newLocation()}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Sure
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ locations }) => {
  const state = {
    lat: 51.05011,
    lng: -114.08529,
    zoom: 10,
  }
  const position = [state.lat, state.lng]

  return (
    <Map center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={customIcon}
        >
          <Popup>{location.description}</Popup>
        </Marker>
      ))}
    </Map>
  )
}
