import gql from 'graphql-tag';
import { accessedByLifts } from './trailFragment';

export const liftFragment = gql`
  fragment liftFragment on Lift {
    name
    status
    capacity
    trailAccess {
      status
      ...accessedByLifts
    }
  }
  ${accessedByLifts}
`;
