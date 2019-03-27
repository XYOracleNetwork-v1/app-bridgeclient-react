import React, { useState, Fragment } from 'react'
import WifiIcon from '@xyo-network/tool-storybook-react/dist/lib/Icons/Wifi'
import BridgeNetworkStatus from '../../gql/queries/networkStatus'
import responseToStatus from './responseToStatus'
import ConnectToWifi from '../ConnectToWifi'

export default ({ onClick }) => {
  const [open, setModal] = useState(false)
  const setModalOpen = () => setModal(true)
  const setModalClosed = () => setModal(false)
  return (
    <Fragment>
      <BridgeNetworkStatus>
        {({ data, loading, error }) => (
          <button className='bg-transparent text-white border-0 cursor-pointer m-2' onClick={setModalOpen}>
            <WifiIcon status={responseToStatus({ data, loading, error })} className='medium-icon' />
          </button>
        )}
      </BridgeNetworkStatus>
      <ConnectToWifi open={open} closeModal={setModalClosed} />
    </Fragment>
  )
}