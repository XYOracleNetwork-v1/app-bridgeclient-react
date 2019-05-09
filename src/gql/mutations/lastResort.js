import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const LAST_RESORT = gql`
  mutation LastResort {
    lastResort
  }
`

export default ({ update, children }) => (
  <Mutation mutation={LAST_RESORT} update={update}>
    {children}
  </Mutation>
)