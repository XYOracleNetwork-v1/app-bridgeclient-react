import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const TAIL_UPGRADE = gql`
  query TailUpgrade {
    tailUnattendedUpgrade
  }
`

export default ({ children }) => (
  <Query query={TAIL_UPGRADE} pollInterval={10000}>{ children }</Query>
)