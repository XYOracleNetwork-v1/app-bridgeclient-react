import React, { useState, useEffect, Fragment } from 'react'
import SetPaymentKey from '../../gql/mutations/setPaymentKey'
import Modal, { ModalContent } from '@xyo-network/tool-storybook-react/dist/lib/Modal'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
// import Web3 from 'web3'
import { parseError } from '../../gql/error'
// import first from 'lodash/first'

export default () => {
  const [open, setOpen] = useState('')
  const [paymentKey, setPaymentKey] = useState('')
  const [address] = useState('')
  const [web3Error] = useState('')
  const closeModal = () => setOpen(false)
  const openModal = () => setOpen(true)
  // const onSubmit = updatePaymentKey => ev => {
  //   ev.preventDefault()
  //   updatePaymentKey({ 
  //     variables: { 
  //       paymentKey
  //     }
  //   })
  // }
  // const loadAccount = async () => {
  //   try {
  //     if (window.ethereum) await window.ethereum.enable()
  //     const provider = (
  //       window.ethereum
  //       ? window.ethereum
  //       : window.web3 && window.web3.currentProvider
  //       ? window.web3.currentProvider
  //       : null
  //     )
  //     const web3 = new Web3(provider)
  //     const accounts = await web3.eth.getAccounts()
  //     const address = (first(accounts) || '').replace(/^0x/, '')
  //     setWeb3Address(address)
  //   } catch (e) {
  //     setWeb3Error(e.message)
  //   }
  // }

  useEffect(() => {
    // if (!open) return
    // if (!window.web3 || !window.ethereum) return
    // if (open) loadAccount()
  }, [open])

  return (
    <>
    <button className='btn btn-primary' onClick={openModal}>Change</button>
    <Modal open={open} onClose={closeModal}>
      <ModalContent
        className='overflow-hidden'
        headerClassName='bg-info text-white'
        title={'Set Payment Key'}
      >
        <Fragment>
          <SetPaymentKey update={closeModal}>
            {(updatePaymentKey, { loading, error }) => (
              <>
              <Alert type={'danger'}>{parseError(error) || web3Error}</Alert>
              <Alert type={'secondary'}>
                {
                  !address || paymentKey === address
                  ? ""
                  : (
                    <>
                    <p className='mb-0'>MetaMask Address</p>
                    <div className='d-flex align-items-center'>
                      <span className='hash-overflow'>{address}</span>
                      <div className='col' />
                      <button 
                        onClick={() => setPaymentKey(address)}
                        className='btn btn-primary'
                      >Use</button>
                    </div>
                    </>
                  )
                }
              </Alert>
              <Alert type={'secondary'}>Coming Soon</Alert>
              {/* <form onSubmit={onSubmit(updatePaymentKey)}>
                <Text name='paymentKey' label='Payment Key' onChange={(v) => setPaymentKey(v)} value={paymentKey} />
                {
                  loading
                  ? <Loader />
                  : <button 
                      type='submit'
                      className='btn btn-primary' 
                    >Submit</button>
                }
              </form> */}
              </>
            )}
          </SetPaymentKey>
        </Fragment>
      </ModalContent>
    </Modal>
    </>
  )
}