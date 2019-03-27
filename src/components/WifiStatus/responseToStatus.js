import get from 'lodash/get'

export default ({ data, loading, error }) => {
  if (error) return 'offline'
  if (loading) return 'connecting'
  if (!get(data, 'network.ip')) return 'offline'
  return 'connected'
}