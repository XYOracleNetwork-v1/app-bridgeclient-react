import React, { useState } from 'react'
import { useXyAccountContext } from '@xyo-network/tool-storybook-react/dist/lib/auth/context'
import { useBlockyImage } from '@xyo-network/tool-storybook-react/dist/lib/Blockie'
import get from 'lodash/get'

export default ({ onLogout }) => {
  const xya = useXyAccountContext()
  const [user, setCurrentUser] = useState(xya.currentUser())
  const uid = get(user, 'uid')
  const blocky = useBlockyImage(uid)
  const signOut = async () => {
    await xya.signOut()
    setCurrentUser(null)
    onLogout && onLogout()
  }
  return user
  ? <div className='d-flex'>
    <div
      className='position-relative bg-dark rounded m-auto mb-2 d-flex align-items-center justify-content-center overflow-hidden'
      style={{ height: 60, width: 60 }}
    ><img src={blocky} className='w-100' /></div>
    <div className='col'>
      <p className='mb-0'>{get(user, 'displayName')}</p>
      <a onClick={signOut} className='cursor-pointer'><u>Logout</u></a>
    </div>
  </div>
  : ''
}