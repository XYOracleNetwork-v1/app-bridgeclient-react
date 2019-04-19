import React, { useState, Fragment } from 'react'
import BridgeNetwork from '../../gql/queries/network'
import ConnectBridgeWifi from '../../gql/mutations/connect'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import Select from '@xyo-network/tool-storybook-react/dist/lib/Form/Select'
import Text from '@xyo-network/tool-storybook-react/dist/lib/Form/Text'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import { parseError } from '../../gql/error'
import identity from 'lodash/identity'
import uniq from 'lodash/uniq'
import get from 'lodash/get'

export default ({ open, closeModal }) => {
  const [selected, selectNetwork] = useState('')
  const onSubmit = connect => ev => {
    ev.preventDefault()
    const password = ev.target.password.value
    connect({ 
      variables: { 
        ssid: selected, 
        password 
      }
    })
  }
  return (
    <Modal open={open} onClose={closeModal}>
      <BridgeNetwork>
        {({ data, loading: aboutLoading, error: aboutError, refetch, networkStatus }) => 
          <ModalContent
            onClose={closeModal}
            className='overflow-hidden'
            headerClassName='bg-info text-white'
            title={
              aboutLoading
              ? '' 
              : get(data, 'network.ssid') 
              ? `Connected to ${get(data, 'network.ssid')}`
              : 'Select a network'
            }>
              <Fragment>
                <Alert type={'danger'}>{parseError(aboutError)}</Alert>
                <ConnectBridgeWifi update={closeModal}>
                  {(connect, { loading, error }) => (
                    <form onSubmit={onSubmit(connect)}>
                      <Alert type={'danger'}>{parseError(error)}</Alert>
                      {
                        aboutLoading
                        ? <div className='text-center'><Loader /></div>
                        : <div className='d-flex'>
                            <Select
                              className='flex-grow-1'
                              label='Wifi Name'
                              options={uniq(['Choose a network'].concat((get(data, 'scan') || []).map(({ ssid }) => ssid).filter(identity)))}
                              value={selected}
                              onChange={selectNetwork}
                            />
                            <button 
                              type='button'
                              className='btn' 
                              onClick={() => refetch()}
                            >Refresh</button>
                          </div>
                      }
                      {
                        selected 
                        ? (
                          <Text label='Wifi Password' name='password' type='password' />
                        ) 
                        : ''
                      }
                      {
                        loading
                        ? <Loader />
                        : selected
                        ? <button 
                            type='submit'
                            className='btn btn-primary' 
                          >Submit</button>
                        : ''
                      }
                    </form>
                  )}
                </ConnectBridgeWifi>
              </Fragment>
          </ModalContent>
        }
      </BridgeNetwork>
    </Modal>
  )
}