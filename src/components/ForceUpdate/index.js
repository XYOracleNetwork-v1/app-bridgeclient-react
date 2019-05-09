import React, { useState } from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import { Collapsible } from '@xyo-network/tool-storybook-react/dist/lib/Collapse'
import CardHead from '@xyo-network/tool-storybook-react/dist/lib/Card/Head'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import ForceUpdate from '../../gql/mutations/forceUpdate'
import TailUpgrade from '../../gql/queries/tailUnattendedUpgrade'
import { parseError } from '../../gql/error'
import over from 'lodash/over'
import get from 'lodash/get'

export default ({ className, onSuccess }) => {
  const [open, setOpen] = useState(false)
  const [logs, setLogs] = useState(false)
  const setModalOpen = () => setOpen(true)
  const setModalClosed = () => setOpen(false)
  const toggleLogs = () => setLogs(!logs)
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
                <div className='accordion mb-2'>
                  <CardHead 
                    renderTitle={() => 'View Logs'} 
                    renderAction={() => <i className='fa fa-eye' />} 
                    onClick={toggleLogs} 
                  />
                  <Collapsible show={logs}>
                    <div className='p-2 bg-dark scroll' style={{ maxHeight: 400 }}>
                      {logs && <TailUpgrade>
                        {({ data }) => <pre className='text-white mb-0'>{get(data, 'tailUnattendedUpgrade')}</pre>}
                      </TailUpgrade> }
                    </div>
                  </Collapsible>
                </div>
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