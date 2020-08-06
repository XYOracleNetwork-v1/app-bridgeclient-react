import React from 'react'
import AboutBridge from '../../gql/queries/about'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import { CopyHash } from '@xyo-network/tool-storybook-react/dist/lib/BoundWitness/Info'
import SetPaymentKey from '../../components/SetPaymentKey'
import { usePinProvider } from '../../pin'
import Archivists from './Archivists'
import Owner from '../../components/Owner'
import { Footer } from '../../components/Footer'
import get from 'lodash/get'

export default () => {
  // const [selected, selectNetwork] = useState(null)
  // const closeModal = () => selectNetwork(null)
  usePinProvider()
  return (
  <>
    <AboutBridge>
      {({ data, loading, error }) => (
        <>
          <div className='jumbotron rounded-0 bg-primary text-center text-white'>
            <h2 className='mb-0'>What Is My IP?</h2>
            <h4 className='mb-0'>{get(data, 'network.ip')}</h4>
          </div>
          <div className='container'>
            <Alert type='danger'>{get(error, 'message')}</Alert>
            <div className='row flex-wrap-reverse'>
              <div className='col-md-8'>
                <div className='text-center'>
                  {loading && <Loader /> }
                </div>
                <div className='jumbotron py-3'>
                  <p className='mb-0'>Public Key</p>
                  <CopyHash value={get(data, 'publicKey')} />
                </div>
                <div className='jumbotron py-3'>
                  <p className='mb-0'>Payment Key</p>
                  <CopyHash value={get(data, 'paymentKey')} />
                  <SetPaymentKey />
                </div>
                <div className='mb-4'>
                  <Archivists />
                </div>
              </div>
              <div className='col-md-4'>
                <div className='mb-4'>
                  <Owner publicKey={get(data, 'publicKey')} />
                </div>
              </div>
              </div>
            </div>
        </>
      )}
    </AboutBridge>
    <Footer />
  </>
  );
}
