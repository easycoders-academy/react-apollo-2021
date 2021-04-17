import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "Загрузка...";
  }
  if (data?.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};
