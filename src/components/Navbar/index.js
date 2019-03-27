import React, { Fragment, useState } from 'react'
import { parseError } from '../../gql/error'
import BridgeNetworkStatus from '../../gql/queries/networkStatus'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import WifiStatus from '../WifiStatus'
import Logo from '../Logo'
import cx from 'classnames'
import get from 'lodash/get'
import './index.css'

const Navbar = ({
  goBack,
  history,
  hidden,
  transparent,
}) => {
  const onGoBack = () => history.goBack()
  const [menu, setMenu] = useState(false)
  const setMenuClosed = () => setMenu(false)
  const toggleMenu = () => setMenu(!menu)

  return (
    <Fragment>
      <nav
        className={cx(
          'navbar navbar-expand navbar-dark bg-md-secondary border-0 w-100 p-0',
          {
            'navbar-hidden': hidden,
            'bg-primary': !transparent,
          }
        )}
      >
        <div className='d-flex navbar-brand align-items-center px-2'>
          <Logo className='pr-1' style={{ height: 32 }} /> XYO Bridge{' '}
          <BridgeNetworkStatus>
            {({ data, loading, error }) => 
              loading
              ? <Loader />
              : error
              ? <p className='text-danger mb-0 pl-2'>{parseError(error)}</p>
              : get(data, 'network.ip')
              ? `- ${get(data, 'network.ip')}`
              : ''
            }
          </BridgeNetworkStatus>
        </div>
        <div className='collapse navbar-collapse align-self-stretch align-items-stretch'>
          <div className='navbar-nav'>
          </div>
          <div className='navbar-nav ml-auto'>
            <WifiStatus />
          </div>
        </div>
      </nav>
      <div>
      </div>
    </Fragment>
  )
}

export default Navbar
