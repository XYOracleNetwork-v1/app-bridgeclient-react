import React, { useState } from 'react'
import { useXyAccountContext } from '@xyo-network/tool-storybook-react/dist/lib/auth/context'
import { SlideInUp, SlideInDown } from '@xyo-network/tool-storybook-react/dist/lib/Animate'
import Login from '@xyo-network/tool-storybook-react/dist/lib/auth/Login'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import UnClaimBridge from '../../gql/mutations/unclaimBridge'
import { parseError } from '../../gql/error'
import get from 'lodash/get'
import UserInfo from '../UserInfo';

export default ({ bridge }) => {
  const id = get(bridge, 'id')
  const owner = get(bridge, 'owner')
  const xya = useXyAccountContext()
  const [user, setCurrentUser] = useState(xya.currentUser())
  const uid = get(user, 'uid')
  const isOwner = owner === uid

  if (!user) {
    return (
      <SlideInUp>
        <Login 
          onSuccess={() => setCurrentUser(xya.currentUser())} 
          buttonClassName='btn-info' 
        />
      </SlideInUp>
    )
  }
  return (
    <>
    <SlideInDown>
      <h4>Bridge Owner</h4>
    </SlideInDown>
    <UserInfo onLogout={() => setCurrentUser(null)} />
    <div className='mt-3'>
    {
      isOwner
      ? (
        <UnClaimBridge variables={{ id }}>
          {(unclaimBridge, { loading, error, data }) => 
            loading
            ? <Loader />
            : error
            ? <p className='text-danger'>{parseError(error)}</p>
            : <SlideInUp>
              <button className='btn btn-info' onClick={unclaimBridge}>Unclaim</button>
            </SlideInUp>
          }
        </UnClaimBridge>
      )
      : (
        <p className='text-danger'>The current account does not own this bridge</p>
      )
    }
    </div>
    </>
  )
}