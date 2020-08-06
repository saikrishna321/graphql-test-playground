import gql from 'graphql-tag';

export const accessedByLifts = gql`
  fragment accessedByLifts on Trail {
    accessedByLifts {
      trailAccess {
        name
        groomed
        night
        trees
      }
    }
  }
`;