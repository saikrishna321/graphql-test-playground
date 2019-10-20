import gql from 'graphql-tag';

export const data = gql`
  fragment data on Lift {
    name
    status
    capacity
  }
`;
