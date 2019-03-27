import gql from 'graphql-tag'

export const NETWORK_FRAGMENT = gql`
  fragment Status on Status {
    ssid
    ip
  }
`