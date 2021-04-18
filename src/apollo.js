import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://easycoders-movies.herokuapp.com/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    }
  }
});

export default client;
