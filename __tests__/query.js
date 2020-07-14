import gql from 'graphql-tag';
import { liftFragment } from '../fragments/liftFragment';
import { accessedByLifts } from '../fragments/trailFragment';
export const QUERY = gql`
  ${liftFragment}
  ${accessedByLifts}
  query allData($lift: ID!, $trail: ID!) {
    Lift(id: $lift) {
      ...liftFragment
    }
    Trail(id: $trail) {
      trees
      name
      trees
      groomed
      night
      status
      difficulty
      ...accessedByLifts
    }
  }
`;
