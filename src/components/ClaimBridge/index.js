import React, { useState } from 'react'
import { useXyAccountContext } from '@xyo-network/tool-storybook-react/dist/lib/auth/context'
import { SlideInUp, SlideInDown } from '@xyo-network/tool-storybook-react/dist/lib/Animate'
import Login from '@xyo-network/tool-storybook-react/dist/lib/auth/Login'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import ClaimBridge from '../../gql/mutations/claimBridge'
import UserInfo from '../UserInfo'
import { parseError } from '../../gql/error'

export default ({ dns, port, publicKey }) => {
  const xya = useXyAccountContext()
  const [user, setCurrentUser] = useState(xya.currentUser())
  return (
    <div>
      <SlideInDown>
        <h4>Claim This Bridge</h4>
      </SlideInDown>
      <UserInfo onLogout={() => setCurrentUser(null)} />
      <ClaimBridge variables={{ dns, port, id: publicKey, publicKey }}>
        {(claimBridge, { loading, error, data }) => 
          loading
          ? <div className='mt-3'>
            <Loader />
            </div>
          : error
          ? <div className='mt-3'>
            <p className='mb-0'>{parseError(error)}</p>
            </div>
          : user
          ? (
            <SlideInUp>
            <div className='mt-3'>
              <button className='btn btn-info' onClick={claimBridge}>Claim</button>
            </div>
            </SlideInUp>
          )
          : (
            <SlideInUp>
            <Login 
              onSuccess={claimBridge} 
              buttonClassName='btn-info' 
            />
            </SlideInUp>
          )
        }
      </ClaimBridge>
    </div>
  )
}