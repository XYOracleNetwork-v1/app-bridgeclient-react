import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const BRIDGE_NETWORK = gql`
  query BridgeNetwork {
    scan {
      ssid
      ip
    }
    network {
      ssid
      ip
    }
  }
`

export default ({ children }) => (
  <Query query={BRIDGE_NETWORK} notifyOnNetworkStatusChange={true} errorPolicy='none'>{ children }</Query>
)