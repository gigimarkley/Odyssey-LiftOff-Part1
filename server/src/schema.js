const { gql } = require("apollo-server");

const typeDefs = gql`
"how to tell the GraphQL server what to retrieve when we query it. Remember, we don't have multiple specific endpoints to target different types like a REST API does. Instead, we define a special Query type."
"The fields of this type are entry points into the rest of our schema. These are the top-level fields that our client can query for."
type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}  

"A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "track's title"
    title: String!
    "track's author"
    author: Author!
    "track's thumbnail to display on page details"
    thumbnail: String
    "track's approx length in min"
    length: Int
    "number of modules the track contains"
    modulesCount: Int
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
