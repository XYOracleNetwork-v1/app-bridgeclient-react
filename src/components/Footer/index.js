import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import cx from 'classnames'
import UpdatePin from '../UpdatePin'
import ForceUpdate from '../ForceUpdate';

export const Footer = ({ className }) => {
  return (
    <div className={cx('footer bg-light', className)}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 d-flex flex-column justify-content-center py-4'>
            <div className='p-2 text-uppercase '>
              <p className='mb-0'>account</p>
            </div>
            <a
              className='p-2 border-bottom d-block text-capitalize'
              href={process.env.REACT_APP_TUTORIALS_URI || ''}
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
            <UpdatePin className='p-2 border-bottom d-block text-capitalize cursor-pointer' />
            <ForceUpdate className='p-2 border-bottom d-block text-capitalize cursor-pointer' />
          </div>
          <div className='col-md-4 d-flex flex-column justify-content-center py-4'>
            <div className='p-2 text-uppercase'>
              <p className='mb-0'>privacy</p>
            </div>
            {/* <NavLink
              className='p-2 border-bottom d-block text-capitalize'
              to='/sharing'
            >
              sharing
            </NavLink> */}
            <a
              className='p-2 border-bottom d-block text-capitalize'
              href={process.env.REACT_APP_PRIVACY_URI || ''}
              target='_blank'
            >
              privacy policy
            </a>
            <a
              className='p-2 border-bottom d-block text-capitalize'
              href={process.env.REACT_APP_TERMS_URI || ''}
              target='_blank'
            >
              terms of Service
            </a>
          </div>
          <div className='col-md-4 d-flex flex-column justify-content-center text-center py-4'>
            <Logo />
            <h4 className='text-uppercase'>powered by xyo</h4>
          </div>
        </div>
        <p className='mb-0 pb-2 text-center'>
          &#169; 2019 XY The Persistent Company
        </p>
        <div className='clear-bottom d-md-none' />
      </div>
    </div>
  )
}
