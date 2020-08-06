import React, { useState } from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import LastResort from '../../gql/mutations/lastResort'
import { parseError } from '../../gql/error'
import over from 'lodash/over'

export default ({ className, onSuccess }) => {
  const [open, setOpen] = useState(false)
  const setModalOpen = () => setOpen(true)
  const setModalClosed = () => setOpen(false)
  return (
    <>
      <button 
        className={className} 
        onClick={setModalOpen}
        style={{ 
          fontSize: "100%",
          fontFamily: "inherit",
          border: "0",
          padding: "0"
        }}
        >
          Last Resort
        </button>
      <Modal open={open} onClose={setModalClosed}>
        <ModalContent 
          className='overflow-hidden'
          headerClassName='bg-info text-white' 
          title='Last Resort'>
          <LastResort
            update={over([onSuccess])}
          >
            {(lastResort, { loading, error, data }) => (
              <div>
                <Alert type={'danger'}>{parseError(error)}</Alert>
                {loading ? (
                  <div className='text-center'>
                    <Loader />
                  </div>
                ) : data
                ? (
                  <>
                    <p>Last resort is executing! Bridge has been scheduled to reboot.</p>
                    <button className='btn btn-primary' onClick={setModalClosed}>
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <button className='btn btn-danger mr-1' onClick={setModalClosed}>
                      Cancel
                    </button>
                    <button className='btn btn-primary' onClick={lastResort}>
                      Confirm
                    </button>
                  </>
                )}
              </div>
            )}
          </LastResort>
        </ModalContent>
      </Modal>
    </>
  )
}