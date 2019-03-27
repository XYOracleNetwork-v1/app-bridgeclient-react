import React from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal';
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import DetachArchivist from '../../gql/mutations/detachArchivist'
import { parseError } from '../../gql/error'
import get from 'lodash/get'

export default ({ archivist, onClose }) => {
  return (
    <>
      <Modal open={!!archivist} onClose={onClose}>
        <ModalContent 
          className='overflow-hidden'
          headerClassName='bg-info text-white' 
          title='Edit Archivist'>
          <DetachArchivist
            update={onClose}
          >
            {(detachArchivist, { loading, error }) => (
              <div>
                <Alert type={'danger'}>{parseError(error)}</Alert>
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <div className='mb-3'>
                      <div className='d-flex'>
                        <strong>DNS</strong>
                        <div className='col' />
                        <span>{get(archivist, 'dns')}</span>
                      </div>
                      <div className='d-flex'>
                        <strong>Port</strong>
                        <div className='col' />
                          <span>{get(archivist, 'port')}</span>
                      </div>
                    </div>
                    <button className='btn btn-primary mr-1' onClick={onClose}>
                      Cancel
                    </button>
                    <button className='btn btn-danger' onClick={() => detachArchivist({ variables: { id: get(archivist, 'id') } })}>
                      Remove
                    </button>
                  </>
                )}
              </div>
            )}
          </DetachArchivist>
        </ModalContent>
      </Modal>
    </>
  )
}