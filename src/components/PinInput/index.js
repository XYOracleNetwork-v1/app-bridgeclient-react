import React, { useRef, useState } from 'react'
import { parseError } from '../../gql/error'
import { setPin } from '../../pin'

export default () => {
  const [error, setError] = useState('')
  const pinRefs = [useRef(), useRef(), useRef(), useRef()]
  const clearPin = (from = 0) => {
    pinRefs.slice(from).filter((ref) => !!ref.current).forEach((ref) => {
      ref.current.value = ''
    })
  }
  const onSubmit = async (ev) => {
    const value = pinRefs.map((ref) => ref.current.value.trim().slice(0, 1)).join('')
    try {
      if (value.length !== 4) throw new Error('Invalid pin')
      await setPin(value)
    } catch (e) {
      clearPin()
      setError(parseError(e))
      pinRefs[0].current.focus()
    }
  }
  return (
    <>
    <div className='d-flex w-50 m-auto mt-4'>
      <div className='col px-1'>
        <input 
          autoFocus
          className='text-center border-0 rounded w-100' 
          name='pin1' 
          type='password' 
          ref={pinRefs[0]} 
          onFocus={() => clearPin(0)}
          onChange={() => pinRefs[1].current.focus()} 
        />
      </div>
      <div className='col px-1'>
        <input 
          className='text-center border-0 rounded w-100' 
          name='pin2' 
          type='password' 
          ref={pinRefs[1]}
          onFocus={() => clearPin(1)} 
          onChange={() => pinRefs[2].current.focus()} 
        />
      </div>
      <div className='col px-1'>
        <input 
          className='text-center border-0 rounded w-100' 
          name='pin3' 
          type='password' 
          ref={pinRefs[2]} 
          onFocus={() => clearPin(2)}
          onChange={() => pinRefs[3].current.focus()} 
        />
      </div>
      <div className='col px-1'>
        <input 
          className='text-center border-0 rounded w-100' 
          name='pin4' 
          type='password' 
          ref={pinRefs[3]} 
          onFocus={() => clearPin(3)}
          onChange={() => onSubmit()} 
        />
      </div>
    </div>
    <p className='text-danger text-center'>{error}</p>
    </>
  )
}
