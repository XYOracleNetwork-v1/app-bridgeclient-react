import React from 'react'
import { Mutation } from 'react-apollo'
import { claimedBridge } from '../cache'
import accountClient from '../accountClient'
import over from 'lodash/over'
import gql from 'graphql-tag'

export const CLAIM_BRIDGE = gql`
  mutation ClaimBridge(
    $id: String!
    $name: String
    $photoUrl: String
    $publicKey: String
    $uuid: String
    $major: Int
    $minor: Int
    $dns: String
    $port: Int
  ) {
    addBridge(
      address: {
        id: $id
        publicKey: $publicKey
        name: $name
        photoUrl: $photoUrl
        dns: $dns
        port: $port
      }
      bridge: { uuid: $uuid, major: $major, minor: $minor }
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
  <Mutation client={accountClient} mutation={CLAIM_BRIDGE} update={over([claimedBridge, update])} variables={variables}>
    {children}
  </Mutation>
)