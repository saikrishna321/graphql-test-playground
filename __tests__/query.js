import gql from 'graphql-tag';
import { data } from './fragments';

export const COMMON_QUERY = gql`
  ${data}
  query {
    Lift(id: "panorama") {
      ...data
    }
    Trail(id: "grandma") {
      trees
      name
    }
  }
`;
