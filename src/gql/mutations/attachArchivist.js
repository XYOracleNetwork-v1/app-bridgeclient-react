import React from 'react'
import { Mutation } from 'react-apollo'
import { attachedArchivist } from '../../gql/cache'
import gql from 'graphql-tag'
import over from 'lodash/over'

const ATTACH_ARCHIVIST = gql`
  mutation AttachArchivist($dns: String, $port: Int) {
    attachArchivist (dns: $dns, port: $port) {
      id
      dns
      port
    }
  }
`

export default ({ update, children }) => (
  <Mutation mutation={ATTACH_ARCHIVIST} update={over(attachedArchivist, update)}>
    {children}
  </Mutation>
)