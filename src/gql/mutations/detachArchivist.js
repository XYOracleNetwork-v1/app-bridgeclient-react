import React from 'react'
import { Mutation } from 'react-apollo'
import { detachedArchivist } from '../../gql/cache'
import gql from 'graphql-tag'
import over from 'lodash/over'

const DETACH_ARCHIVIST = gql`
  mutation DetachArchivist($id: String) {
    detachArchivist (id: $id) {
      id
    }
  }
`

export default ({ update, children }) => (
  <Mutation mutation={DETACH_ARCHIVIST} update={over(detachedArchivist, update)}>
    {children}
  </Mutation>
)