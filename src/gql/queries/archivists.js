import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const CONNECTED_ARCHIVISTS = gql`
  query ConnectedArchivists {
    archivists {
      id
      dns
      port
    }
  }
`

export default ({ children }) => (
  <Query query={CONNECTED_ARCHIVISTS}>{ children }</Query>
)