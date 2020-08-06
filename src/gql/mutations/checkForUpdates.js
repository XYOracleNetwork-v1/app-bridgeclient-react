import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CHECK_FOR_UPDATES = gql`
  mutation CheckForUpdates {
    checkForUpdates
  }
`

export default ({ update, children }) => (
  <Mutation mutation={CHECK_FOR_UPDATES} update={update}>
    {children}
  </Mutation>
)

// refetchQueries={() => [{ query: BRIDGE_VERSIONS, variables: {} }]}