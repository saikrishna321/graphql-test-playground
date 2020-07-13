import gql from 'graphql-tag';
import { liftFragment } from '../fragments/liftFragment';
import { accessedByLifts } from '../fragments/trailFragment';
export const QUERY = gql`
  ${liftFragment}
  ${accessedByLifts}
  query {
    Lift(id: "panorama") {
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
