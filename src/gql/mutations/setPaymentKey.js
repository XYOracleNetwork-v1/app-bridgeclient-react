import React from 'react'
import { Mutation } from 'react-apollo'
import { updatedPaymentKey } from '../../gql/cache'
import gql from 'graphql-tag'
import over from 'lodash/over'

const SET_PAYMENT_KEY = gql`
  mutation SetPaymentKey($paymentKey: String) {
    setPaymentKey (paymentKey: $paymentKey)
  }
`

export default ({ update, children }) => (
  <Mutation mutation={SET_PAYMENT_KEY} update={over(updatedPaymentKey, update)}>
    {children}
  </Mutation>
)