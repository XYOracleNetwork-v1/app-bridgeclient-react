import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const BRIDGE_NETWORK_STATUS = gql`
  query BridgeNetworkStatus {
    ip
    network {
      ssid
      ip
    }
  }
`

export default ({ children }) => (
  <Query query={BRIDGE_NETWORK_STATUS} errorPolicy='none' pollInterval={10000}>{ children }</Query>
)