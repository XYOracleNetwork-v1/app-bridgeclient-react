import React, { useState } from 'react'
import ConnectedArchivists from '../../gql/queries/archivists'
import NoneFound from '../../components/NoneFound'
import Archivist from '../../components/Archivist'
import AddArchivist from '../../components/AddArchivist'
import UpdateArchivist from '../../components/UpdateArchivist'
import ArchivistIcon from '@xyo-network/tool-storybook-react/dist/lib/Icons/Archivist'
import Loader from '@xyo-network/tool-storybook-react/dist/lib/Loader'
import size from 'lodash/size'
import get from 'lodash/get'

export default () => {
  const [archivist, setArchivist] = useState(null)
  const setClosed = () => setArchivist(null)
  return (
    <div className='mb-5'>
      <h4>Connected Archivists</h4>
      <ConnectedArchivists>
        {({ data, loading, error }) => (
          <div className='row'>
            {
              loading
              ? (
                <div className='text-center'>
                  <Loader />
                </div>
              )
              : size(get(data, 'archivists'))
              ? get(data, 'archivists').map((archivist, i) => (
                <div className='col-6 col-md-4 col-lg-3 mb-4' key={i}>
                  <Archivist archivist={archivist} onClick={() => setArchivist(archivist)} />
                </div>
              ))
              : <NoneFound  
                  className='mx-auto'
                  icon={<ArchivistIcon className='large-icon' />}
                  text={'No archivists found'} 
                />
            }
          </div>
        )}
      </ConnectedArchivists>
      <div className='text-center'>
        <AddArchivist />
      </div>
      <UpdateArchivist archivist={archivist} onClose={setClosed} />
    </div>
  )
}