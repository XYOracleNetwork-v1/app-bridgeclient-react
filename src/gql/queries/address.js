import React from 'react'
import gql from 'graphql-tag'
import AddressFragment from '../fragments/address'
import accountClient from '../accountClient'
import { Query } from 'react-apollo'
import get from 'lodash/get'

export const ADDRESS_BY_DNS = gql`
  query AddressByDNS($dns: String) {
    addressByDNS(dns: $dns) {
      id
      name
      owner
      photoUrl
      publicKey
      multiaddr
      dns
      port
    }
  }
`

export const ADDRESS_BY_PUBLIC_KEY = gql`
  query AddressByPublicKey($publicKey: String) {
    addressByPublicKey(publicKey: $publicKey) {
      id
      name
      owner
      photoUrl
      publicKey
      multiaddr
      dns
      port
    }
  }
`

const addressQueryFactory = (query, path) => ({
  variables,
  children,
  skip,
}) => (
  <Query 
    client={accountClient}
    query={query} 
    variables={variables} 
    skip={skip}
  >
    {({ data, loading, error }) =>
      children({ loading, error, data: get(data, path) })}
  </Query>
)

export const AddressByDNS = addressQueryFactory(ADDRESS_BY_DNS, 'addressByDNS')
export const AddressByPublicKey = addressQueryFactory(
  ADDRESS_BY_PUBLIC_KEY,
  'addressByPublicKey'
)
