import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ABOUT_BRIDGE } from '../queries/about'
import { BRIDGE_NETWORK } from '../queries/network'
import { BRIDGE_NETWORK_STATUS } from '../queries/networkStatus'

export const DISCONNECT_BRIDGE_WIFI = gql`
  mutation DisconnectBridgeWifi {
    disconnect
  }
`

export default ({ children, update }) => (
  <Mutation 
    update={update} 
    mutation={DISCONNECT_BRIDGE_WIFI} 
    refetchQueries={[
      { query: ABOUT_BRIDGE },
      { query: BRIDGE_NETWORK },
      { query: BRIDGE_NETWORK_STATUS },
    ]}
  >
    { children }
  </Mutation>
)