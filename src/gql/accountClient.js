import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { useXyAccountAccessToken } from '@xyo-network/tool-storybook-react/dist/lib/auth/context'

const authLink = setContext((o, { headers }) => {
  try {
    return {
      headers: {
        'X-Auth-Token': useXyAccountAccessToken(),
        ...headers,
      },
    }
  } catch (e) {
    return { headers }
  }
})

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(new HttpLink({
    uri: process.env.REACT_APP_ACCOUNT_GRAPHQL
  })),
})