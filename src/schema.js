const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's id"
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A Track is a grpup of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete. in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
    "the track's complete description, can be in Markdown format"
    description: String
    "the number of times a track has been viewed"
    numberOfViews: Int
    "the track's complete array of modulethe track's complete array of moduless"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a track"
  type Module {
    id: ID!
    "the module's title"
    title: String!
    "the module's length in minutes"
    length: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
