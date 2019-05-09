import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const FORCE_UPDATE = gql`
  mutation ForceUpdate {
    forceUpdate
  }
`

export default ({ update, children }) => (
  <Mutation mutation={FORCE_UPDATE} update={update}>
    {children}
  </Mutation>
)