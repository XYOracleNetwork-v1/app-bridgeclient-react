import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ABOUT_BRIDGE } from '../queries/about';

export const CONNECT_BRIDGE_WIFI = gql`
  mutation ConnectBridgeWifi($ssid: String, $password: String, $pin: String) {
    connect(ssid: $ssid, password: $password, pin: $pin)
  }
`

export default ({ children, update }) => (
  <Mutation mutation={CONNECT_BRIDGE_WIFI} update={update} refetchQueries={[{ query: ABOUT_BRIDGE }]}>{ children }</Mutation>
)