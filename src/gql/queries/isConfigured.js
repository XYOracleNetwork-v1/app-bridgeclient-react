import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import get from 'lodash/get'

export const BRIDGE_IS_CONFIGURED = gql`
  query BridgeIsConfigured {
    isConfigured
  }
`

export default ({ children }) => (
  <Query query={BRIDGE_IS_CONFIGURED}>{
    ({ data, loading, error }) => children({ data: get(data, 'isConfigured'), loading, error })
  }</Query>
)