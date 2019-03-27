import React from 'react'
import { Page, Main } from '../../components/Layout'
import {
  SlideInUp,
  SlideInDown,
} from '@xyo-network/tool-storybook-react/dist/lib/Animate'
import Logo from '../../components/Logo'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import IsConfigured from '../../gql/queries/isConfigured'
import PinInput from '../../components/PinInput'
import PasswordInput from '../../components/PasswordInput'
import PasswordConfiguration from '../../components/PasswordConfiguration'
import { parseError } from '../../gql/error'
import Navbar from '../../components/Navbar'

export default  () => {
  return (
    <Page>
      <Navbar />
      <Main>
        <div className='col mb-5' />
        <SlideInDown timer={300}>
          <div className='text-center mb-2'>
            <Logo />
          </div>
          <h4 className='text-white text-center'>XYO BRIDGE</h4>
        </SlideInDown>
        <IsConfigured>
          {({ loading, error, data }) => (
            loading
            ? <div className='text-center'><Loader /></div>
            : error
            ? <p className='text-center text-danger'>{parseError(error)}</p>
            : data
            ? (
              <SlideInUp timer={300}>
                <PasswordInput />
              </SlideInUp>
            )
            : (
              <SlideInUp timer={300}>
                <PasswordConfiguration />
              </SlideInUp>
            )
          )}
        </IsConfigured>
        <div className='col mb-4' />
      </Main>
    </Page>
  )
}
