import React, { useState } from 'react'
import CheckForUpdates from '../../gql/mutations/checkForUpdates'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'

export default ({ className, onSuccess }) => {
  return (
    <CheckForUpdates update={onSuccess}>
      {(checkForUpdates, { loading: updating }) => (
        updating
        ? <Loader className={className} />
        : <a className={className} onClick={checkForUpdates} >Check for updates</a>
    )}
    </CheckForUpdates>
  )
}