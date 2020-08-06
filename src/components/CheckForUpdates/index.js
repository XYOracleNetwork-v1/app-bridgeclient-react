import React from 'react'
import CheckForUpdates from '../../gql/mutations/checkForUpdates'

export default ({ className, onSuccess }) => {
  return (
    <CheckForUpdates update={onSuccess} >
      {(checkForUpdates, { loading: updating }) => (
        updating
        ? <button className={className} >Pending...</button>
        : <button className={className} onClick={checkForUpdates} >Refresh</button>
    )}
    </CheckForUpdates>
  )
}