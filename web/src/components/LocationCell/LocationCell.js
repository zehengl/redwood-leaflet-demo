import Location from 'src/components/Location'

export const QUERY = gql`
  query FIND_LOCATION_BY_ID($id: Int!) {
    location: location(id: $id) {
      id
      latitude
      longitude
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Location not found</div>

export const Success = ({ location }) => {
  return <Location location={location} />
}
