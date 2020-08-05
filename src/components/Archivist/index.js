import React from 'react'
import { useBlockyImage } from '@xyo-network/tool-storybook-react/dist/lib/Blockie'
import Card from '@xyo-network/tool-storybook-react/dist/lib/Card'
import get from 'lodash/get'
import './index.css'

export default ({ archivist, onClick }) => {
  const id = get(archivist, 'id')
  const src = useBlockyImage(id)
  return (
    <Card>
      <div onClick={onClick} className='cursor-pointer'>
          <div className='text-center mt-3 mx-3'>
            <img className='device-img' src={src} alt={id} />
          </div>
          <div className='card-body'>
            <div className='card-title hash-overflow mb-0'>{get(archivist, 'dns')}</div>
            <div className='card-title mb-0'>{get(archivist, 'port')}</div>
          </div>
      </div>
    </Card>
  )
}