import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const FACTORY_RESET = gql`
  mutation FactoryReset {
    factoryReset
  }
`

export default ({ update, children }) => (
  <Mutation mutation={FACTORY_RESET} update={update}>
    {children}
  </Mutation>
)