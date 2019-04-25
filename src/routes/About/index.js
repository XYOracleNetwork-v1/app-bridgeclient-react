import React from 'react'
import BridgeVersionsQuery from '../../gql/queries/versions'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import Alert from '@xyo-network/tool-storybook-react/dist/lib/Alert'
import ForceUpdate from '../../components/ForceUpdate'
import LastResort from '../../components/LastResort'
import { Footer } from '../../components/Footer'
import { usePinProvider } from '../../pin'
import get from 'lodash/get'
import cx from 'classnames'
import CheckForUpdates from '../../components/CheckForUpdates';

const BridgeVersionMessage = ({ data, loading }) => {
  if (loading) return (
    <h4 className='text-center'>
      <Loader /> 
    </h4>  
  )

  const aptCurrent = get(data, 'getAptPackageVersion.current')
  const aptLatest = get(data, 'getAptPackageVersion.latest')
  if (aptCurrent === aptLatest) {
    return <h4>Your bridge is up to date</h4>
  }
  return <h4>Your bridge is out of date</h4>
}

const BridgeVersions = ({ data }) => {
  const npmLatest = get(data, 'getNpmPackageVersion.latest')
  const aptCurrent = get(data, 'getAptPackageVersion.current')
  const aptLatest = get(data, 'getAptPackageVersion.latest')
  return (
    <>
      {/* <div>
        **there is no reason to have npm version because that is contained in the apt**
        <b className='pr-2'>Current NPM Version: </b>
        <span className={cx({ 
          'text-danger': npmCurrent !== npmLatest
        })}>{npmCurrent}</span>
        <span className={cx('px-1', {
          'd-none': npmCurrent === npmLatest,
        })}>&#x3e;</span>
        <span className={cx({
          'd-none': npmCurrent === npmLatest,
          'text-success': npmCurrent !== npmLatest
        })}>{npmLatest}</span>
      </div> */}
      <div>
        <b className='pr-2'>Current APT Version: </b>
        <span className={cx({ 
          'text-danger': aptCurrent !== aptLatest 
        })}>{aptCurrent}</span>
        <span className={cx('px-1', {
          'd-none': aptCurrent === aptLatest,
        })}>&#x3e;</span>
        <span className={cx({
          'd-none': aptCurrent === aptLatest,
          'text-success': aptCurrent !== aptLatest 
        })}>{npmLatest}</span>
      </div>
    </>
  )
}

// const BridgeUpdate = ({ loading }) => {
//   if (loading) return <div />
  // const npmCurrent = get(data, 'getNpmPackageVersion.current')
  // const npmLatest = get(data, 'getNpmPackageVersion.latest')
  // const aptCurrent = get(data, 'getAptPackageVersion.current')
  // const aptLatest = get(data, 'getAptPackageVersion.latest')
  // if (npmCurrent === npmLatest && aptCurrent === aptLatest) {
  //   return <div />
  // }
//   return <ForceUpdate className='btn btn-danger text-white mt-2' />
// }

export default ({}) => {
  usePinProvider()
  return (
    <>
      <BridgeVersionsQuery>
        {({ data, loading, error, refetching, refetch }) => (
          <div className='container mb-5 flex-grow-1'>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <div className='card my-5'>
                  <div className='card-body'>
                    <Alert type='danger'>{get(error, 'message')}</Alert>
                    <BridgeVersionMessage data={data} loading={loading || refetching} /> 
                    <BridgeVersions data={data} loading={loading || refetching} /> 
                    <ForceUpdate className='btn btn-danger text-white mt-2' />
                    <CheckForUpdates className='btn btn-primary text-white ml-2 mt-2' onSuccess={refetch} />
                  </div>
                </div>
                <div className='card mb-5'>
                  <div className='card-body'>
                    <h4>Last Resort Update</h4>
                    <p>This cannot be undone and can have detrimental effects to your bridge.</p>
                    <LastResort className='btn btn-danger text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </BridgeVersionsQuery>
      <Footer />
    </>
  )
}