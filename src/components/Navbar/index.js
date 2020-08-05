import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { parseError } from '../../gql/error'
import BridgeNetworkStatus from '../../gql/queries/networkStatus'
import WifiStatus from '../WifiStatus'
import Logo from '../Logo'
import cx from 'classnames'
import identity from 'lodash/identity'
import get from 'lodash/get'
import './index.css'

const networkStatusText = (data) => {
  if (!data) return data
  const ssid = get(data, 'network.ssid')
  const ip = get(data, 'network.ip')
  return [ssid, ip].filter(identity).join(' ')
}

const Navbar = ({
  history,
  hidden,
  transparent,
}) => {
  // const onGoBack = () => history && history.goBack()
  const goHome = () => history && history.push('/')
  // const [menu, setMenu] = useState(false)
  // const setMenuClosed = () => setMenu(false)
  // const toggleMenu = () => setMenu(!menu)

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
          <button onClick={goHome} className='text-white no-underline cursor-pointer'>
            <Logo className='pr-1' style={{ height: 32 }} /> XYO Bridge{' '}
          </button>
        </div>
        <div className='collapse navbar-collapse align-self-stretch align-items-stretch'>
          <div className='navbar-nav'>
          </div>
          <div className='d-flex navbar-nav ml-auto align-items-center'>
            <BridgeNetworkStatus>
              {({ data, loading, error }) => 
                loading
                ? ''
                : error
                ? <p className='text-danger mb-0 pr-2'>{parseError(error)}</p>
                : <p className='text-white mb-0 pr-2'>{networkStatusText(data)}</p>
              }
            </BridgeNetworkStatus>
            <WifiStatus />
          </div>
        </div>
      </nav>
      <div>
      </div>
    </Fragment>
  )
}

export default withRouter(Navbar)
