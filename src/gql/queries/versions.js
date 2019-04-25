import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const BRIDGE_VERSIONS = gql`
  query BridgeVersions {
    getNpmPackageVersion {
      current
      latest
    }
    getAptPackageVersion {
      current
      latest
    }
  }
`

export default ({ children }) => (
  <Query query={BRIDGE_VERSIONS}>{ children }</Query>
)