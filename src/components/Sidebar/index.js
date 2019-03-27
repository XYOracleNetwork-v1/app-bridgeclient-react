import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {
  useXyAccountContext,
  isXYAccount,
} from '@xyo-network/tool-storybook-react/dist/lib/auth/context'
import client from '../../gql/client'

const Account = ({ history }) => {
  const xya = useXyAccountContext()
  const onLogOut = () => {
    if (isXYAccount(xya)) xya.signOut()
    history.push('/login')
    client.resetStore()
  }
  return (
    <Fragment>
      <div className='bg-primary p-3 pt-5'>
        <h4 className='text-center text-white text-uppercase'>
          account
        </h4>
      </div>
      {/*<div className='bg-light p-2 text-uppercase'>
        <p className='mb-0'>account</p>
      </div>
      <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/profile'
      >
        my profile
      </NavLink>
      <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/archivists'
      >
        archivists
      </NavLink>
      <NavLink className='p-2 border-bottom d-block text-capitalize' to='/scan'>
        local bridges
      </NavLink>
      <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/passwords'
      >
        passwords
      </NavLink>
      <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/notifications'
      >
        notifications
      </NavLink>
      <div className='bg-light p-2 text-uppercase'>
        <p className='mb-0'>support</p>
      </div>
      <a
        className='p-2 border-bottom d-block text-capitalize'
        href={process.env.REACT_APP_TUTORIAL_URI || ''}
        target='_blank'
      >
        tutorials
      </a>
      <a
        className='p-2 border-bottom d-block text-capitalize'
        href={process.env.REACT_APP_GET_HELP_URI || ''}
        target='_blank'
      >
        get help
      </a>
      <div className='bg-light p-2 text-uppercase'>
        <p className='mb-0'>privacy</p>
      </div>
      {/* <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/sharing'
      >
        sharing
      </NavLink>
      <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/privacy-policy'
      >
        privacy policy
      </NavLink>
      <NavLink
        className='p-2 border-bottom d-block text-capitalize'
        to='/terms-of-service'
      >
        terms of Service
      </NavLink>
      <div className='p-2'>
        <button
          className='btn btn-secondary text-uppercase w-100'
          onClick={onLogOut}
        >
          log out
        </button>
      </div>*/}
    </Fragment>
  )
}

export default withRouter(Account)
