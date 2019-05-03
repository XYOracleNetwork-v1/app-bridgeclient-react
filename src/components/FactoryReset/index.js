import React, { useState } from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import FactoryReset from '../../gql/mutations/factoryReset'
import { parseError } from '../../gql/error'
import over from 'lodash/over'

export default ({ className, onSuccess }) => {
  const [open, setOpen] = useState(false)
  const setModalOpen = () => setOpen(true)
  const setModalClosed = () => setOpen(false)
  return (
    <>
      <a className={className} onClick={setModalOpen}>Factory Reset</a>
      <Modal open={open} onClose={setModalClosed}>
        <ModalContent 
          className='overflow-hidden'
          headerClassName='bg-info text-white' 
          title='Factory Reset'>
          <FactoryReset
            update={over([onSuccess])}
          >
            {(factoryReset, { loading, error, data }) => (
              <div>
                {loading ? (
                  <div className='text-center'>
                    <Loader />
                  </div>
                ) : data
                ? (
                  <>
                    <p>Bridge reset in progress...</p>
                    <button className='btn btn-primary' onClick={setModalClosed}>
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <button className='btn btn-danger mr-1' onClick={setModalClosed}>
                      Cancel
                    </button>
                    <button className='btn btn-primary' onClick={factoryReset}>
                      Confirm
                    </button>
                  </>
                )}
              </div>
            )}
          </FactoryReset>
        </ModalContent>
      </Modal>
    </>
  )
}