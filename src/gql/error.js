import get from 'lodash/get'

export const parseError = (error) => (get(error, 'message') || '').replace(/GraphQL error: /, '')