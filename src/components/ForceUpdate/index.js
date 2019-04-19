import React, { useState } from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import ForceUpdate from '../../gql/mutations/forceUpdate'
import { parseError } from '../../gql/error'
import over from 'lodash/over'

export default ({ className, onSuccess }) => {
  const [open, setOpen] = useState(false)
  const setModalOpen = () => setOpen(true)
  const setModalClosed = () => setOpen(false)
  return (
    <>
      <a className={className} onClick={setModalOpen}>Force Update</a>
      <Modal open={open} onClose={setModalClosed}>
        <ModalContent 
          className='overflow-hidden'
          headerClassName='bg-info text-white' 
          title='Force Update'>
          <ForceUpdate
            update={over([onSuccess])}
          >
            {(forceUpdate, { loading, error, data }) => (
              <div>
                <Alert type={'danger'}>{parseError(error)}</Alert>
                {loading ? (
                  <div className='text-center'>
                    <Loader />
                  </div>
                ) : data
                ? (
                  <>
                    <p>Update successful! Bridge has been scheduled to reboot</p>
                    <button className='btn btn-primary' onClick={setModalClosed}>
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <button className='btn btn-danger mr-1' onClick={setModalClosed}>
                      Cancel
                    </button>
                    <button className='btn btn-primary' onClick={forceUpdate}>
                      Confirm
                    </button>
                  </>
                )}
              </div>
            )}
          </ForceUpdate>
        </ModalContent>
      </Modal>
    </>
  )
}