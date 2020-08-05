import React, { useState } from 'react'
import { TextInput } from '@xyo-network/tool-storybook-react/dist/lib/Form'
import { parseError } from '../../gql/error'
import { setPin } from '../../pin'

export default () => {
  const [error, setError] = useState('')
  // const ref = useRef()
  const onSubmit = async (ev) => {
    ev.preventDefault()
    const target = ev.target
    const value = ev.target.password.value
    try {
      await setPin(value)
    } catch (e) {
      setError(parseError(e))
      target.password.value = ''
      target.password.focus()
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <TextInput 
          name='password' 
          type='password' 
          placeholder='Enter Password' 
          className='text-white' 
          inputClassName='px-2'
          autoFocus 
        />
        <button className='btn btn-info w-100'>Login</button>
      </form>
      <p className='text-danger text-center'>{error}</p>
    </>
  )
}