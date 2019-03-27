import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'
import { pinProvider } from '../pin'

const authLink = setContext((o, { headers }) => {
  try {
    return {
      headers: {
        'X-Auth-Token': pinProvider.value,
        ...headers,
      },
    }
  } catch (e) {
    return { headers }
  }
})

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(new HttpLink()),
})