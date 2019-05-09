import React, { Suspense, useState } from 'react'
import WifiIcon from '@xyo-network/tool-storybook-react/dist/lib/Icons/Wifi'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import { AddressByPublicKey } from '../../gql/queries/address'
import BridgeNetworkStatus from '../../gql/queries/networkStatus'
import responseToStatus from '../WifiStatus/responseToStatus'
import ClaimBridge from '../ClaimBridge'
import BridgeOwner from '../BridgeOwner'
import ConnectToWifi from '../ConnectToWifi'
import { SlideInLeft } from '@xyo-network/tool-storybook-react/dist/lib/Animate';
import { parseError } from '../../gql/error'
import get from 'lodash/get'

const CenterLoader = () => (
  <div className='text-center py-3'>
    <Loader />
  </div>
)

export default ({ publicKey }) => {
  const [open, setModal] = useState(false)
  const setModalClosed = () => setModal(false)
  const setModalOpen = () => setModal(true)
  return (
    <div className='card bg-primary text-white overflow-hidden'>
      <div className='card-body'>
        <BridgeNetworkStatus>
          {({ data, loading, error }) => {
            const status = responseToStatus({ data, loading, error })
            const isOffline = status !== 'connected'
            const dns = get(data, 'network.ip')
            const port = 80
            if (isOffline) return (
              <SlideInLeft>
                <div className='text-center py-3'>
                  <WifiIcon status={status} className='large-icon' />
                  <p>Connect to Wifi in order to claim this bridge</p>
                  <button className='btn btn-outline-light' onClick={setModalOpen}>Connect</button>
                </div>
              </SlideInLeft>
            )
            return (
              <AddressByPublicKey variables={{ publicKey }} skip={!publicKey}>
                {({ data, loading, error }) => (
                    loading
                    ? <CenterLoader />
                    : error
                    ? <p className='text-danger mb-0'>{parseError(error)}</p>
                    : data
                    ? <Suspense fallback={<CenterLoader />}>
                        <BridgeOwner bridge={data} />
                      </Suspense>
                    : <Suspense fallback={<CenterLoader />}>
                      <ClaimBridge dns={dns} port={port} publicKey={publicKey} />
                    </Suspense>
                )}
              </AddressByPublicKey>
            )
          }}
        </BridgeNetworkStatus>
        </div>
        <ConnectToWifi open={open} closeModal={setModalClosed} />
    </div>
  )
}