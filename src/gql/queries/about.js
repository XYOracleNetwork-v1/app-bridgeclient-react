import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const ABOUT_BRIDGE = gql`
  query AboutBridge {
    publicKey
    paymentKey
    network {
      ssid
      ip
    }
  }
`

export default ({ children }) => (
  <Query query={ABOUT_BRIDGE}>{ children }</Query>
)