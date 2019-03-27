import gql from 'graphql-tag'

export const AUTH_TOKEN = gql`
  query AuthToken($pin: String) {
    getAuthToken(pin: $pin)
  }
`