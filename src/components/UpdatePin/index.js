import React, { useState } from 'react'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import { TextInput } from '@xyo-network/tool-storybook-react/dist/lib/Form'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import UpdatePin from '../../gql/mutations/updatePin'
import { parseError } from '../../gql/error'

export default ({ className }) => {
  const [open, setModal] = useState(false)
  const setOpen = () => setModal(true)
  const setClosed = () => setModal(false)
  const onSubmit = (updatePin) => (ev) => {
    ev.preventDefault()
    const oldPin = ev.target.oldPin.value
    const newPin = ev.target.newPin.value
    updatePin({
      variables: {
        oldPin,
        newPin
      }
    })
  }
  return (
    <>
      <a className={className} onClick={setOpen}>Edit Password</a>
      <Modal open={open} onClose={setClosed}>
        <ModalContent 
          className='overflow-hidden'
          headerClassName='bg-info text-white' 
          title='Edit Password'>
          <UpdatePin update={setClosed}>
            {(updatePin, { loading, error }) => (
              <div>
                <Alert type={'danger'}>{parseError(error)}</Alert>
                <form onSubmit={onSubmit(updatePin)} id='update-pin'>
                  <TextInput name='oldPin' type='password' label='Old Password' />
                  <TextInput name='newPin' type='password' label='New Password' />
                </form>
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <button className='btn btn-danger mr-1' onClick={setClosed}>
                      Cancel
                    </button>
                    <button className='btn btn-primary' type='submit' form='update-pin'>
                      Save
                    </button>
                  </>
                )}
              </div>
            )}
          </UpdatePin>
        </ModalContent>
      </Modal>
    </>
  )
}