import gql from 'graphql-tag';
import { liftFragment } from '../fragments/liftFragment';
import { accessedByLifts } from '../fragments/trailFragment';
export const QUERY = gql`
  ${liftFragment}
  ${accessedByLifts}
  query allData($id: ID!) {
    Lift(id: $id) {
      ...liftFragment
    }
    Trail(id: "grandma") {
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
