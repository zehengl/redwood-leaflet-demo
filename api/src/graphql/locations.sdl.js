import gql from 'graphql-tag'

export const schema = gql`
  type Location {
    id: Int!
    latitude: Float!
    longitude: Float!
    description: String!
  }

  type Query {
    locations: [Location!]!
    location(id: Int!): Location!
  }

  input CreateLocationInput {
    latitude: Float!
    longitude: Float!
    description: String!
  }

  input UpdateLocationInput {
    latitude: Float
    longitude: Float
    description: String
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
    deleteLocation(id: Int!): Location!
  }
`
