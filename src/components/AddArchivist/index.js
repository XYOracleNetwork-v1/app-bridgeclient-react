import React, { useState } from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal';
import { TextInput, NumberInput } from '@xyo-network/tool-storybook-react/dist/lib/Form'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import AttachArchivist from '../../gql/mutations/attachArchivist'
import { parseError } from '../../gql/error'
import over from 'lodash/over'

const preventDefault = fn => ev => {
  if (ev) ev.preventDefault()
  fn(ev)
}

export default ({ onSuccess }) => {
  const [open, setOpen] = useState(false)
  const setModalOpen = () => setOpen(true)
  const setModalClosed = () => setOpen(false)
  return (
    <>
      <button className='btn btn-outline-primary' onClick={setModalOpen}>
        <i className='fa fa-plus mr-1' /> Connect More Archivists
      </button>
      <Modal open={open} onClose={setModalClosed}>
        <ModalContent 
          className='overflow-hidden'
          headerClassName='bg-info text-white' 
          title='Add Archivist'>
          <AttachArchivist
            update={over([setModalClosed, onSuccess])}
          >
            {(attachArchivist, { loading, error }) => (
              <form
                onSubmit={preventDefault(ev =>
                  attachArchivist({
                    variables: {
                      dns: ev.target.dns.value,
                      port: Number(ev.target.port.value),
                    },
                  })
                )}
              >
                <TextInput label='IP address or DNS name' name='dns' />
                <NumberInput label='Port' name='port' />
                <Alert type={'danger'}>{parseError(error)}</Alert>
                {loading ? (
                  <Loader />
                ) : (
                  <button className='btn btn-primary' type='submit'>
                    Save
                  </button>
                )}
              </form>
            )}
          </AttachArchivist>
        </ModalContent>
      </Modal>
    </>
  )
}