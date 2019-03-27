import gql from 'graphql-tag'

export default gql`
  fragment Address on Address {
    id
    name
    owner
    photoUrl
    publicKey
    multiaddr
    dns
    port
  }
`
