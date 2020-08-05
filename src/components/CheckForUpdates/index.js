import React from 'react'
import CheckForUpdates from '../../gql/mutations/checkForUpdates'

export default ({ className, onSuccess }) => {
  return (
    <CheckForUpdates update={onSuccess} >
      {(checkForUpdates, { loading: updating }) => (
        updating
        ? <a className={className} >Pending...</a>
        : <a className={className} onClick={checkForUpdates} >Refresh</a>
    )}
    </CheckForUpdates>
  )
}