import React from 'react'
import { Mutation } from 'react-apollo'
import { updatedPin } from '../cache'
import gql from 'graphql-tag'
import over from 'lodash/over'

export const UPDATE_PIN = gql`
  mutation UpdatePin($oldPin: String, $newPin: String) {
    updatePin(oldPin: $oldPin, newPin: $newPin)
  }
`

export default ({ update, children }) => (
  <Mutation mutation={UPDATE_PIN} update={over(updatedPin, update)}>
    {children}
  </Mutation>
)