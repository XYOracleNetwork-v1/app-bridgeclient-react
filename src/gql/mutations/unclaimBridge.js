import React from 'react'
import { Mutation } from 'react-apollo'
import { unclaimedBridge } from '../cache'
import accountClient from '../accountClient'
import bridgeClient from '../client'
import { ABOUT_BRIDGE } from '../queries/about'
import { ADDRESS_BY_PUBLIC_KEY } from '../queries/address'
import over from 'lodash/over'
import get from 'lodash/get'
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

export const unclaimBridge = async () => {
  const about = await bridgeClient.query({ query: ABOUT_BRIDGE })
  const publicKey = get(about, 'data.publicKey')
  if (!publicKey) return
  const address = await accountClient.query({ query: ADDRESS_BY_PUBLIC_KEY, variables: { publicKey } })
  const id = get(address, 'data.addressByPublicKey.id')
  if (!id) return
  await accountClient.mutate({
    mutation: UNCLAIM_BRIDGE,
    update: unclaimedBridge,
    variables: { id }
  })
}

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