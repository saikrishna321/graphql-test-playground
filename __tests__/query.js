import gql from 'graphql-tag';
import { liftFragment } from '../fragments/liftFragment';

export const QUERY = gql`
  ${liftFragment}
  query {
    Lift(id: "panorama") {
      ...liftFragment
    }
    Trail(id: "grandma") {
      trees
      name
    }
  }
`;
