import React from 'react'
import { Mutation } from 'react-apollo'
import { unclaimedBridge } from '../cache'
import accountClient from '../accountClient'
import over from 'lodash/over'
import gql from 'graphql-tag'

export const UNCLAIM_BRIDGE = gql`
  mutation UnclaimBridge(
    $id: String!
  ) {
    deleteBridge(
      id: $id
    ) {
      id
      name
      owner
      photoUrl
      publicKey
      multiaddr
      dns
      port
    }
  }
`

export default ({ update, children, variables }) => (
  <Mutation 
    client={accountClient} 
    mutation={UNCLAIM_BRIDGE} 
    update={over([unclaimedBridge, update])} 
    variables={variables}
  >
    {children}
  </Mutation>
)