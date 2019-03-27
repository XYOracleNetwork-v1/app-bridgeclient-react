import React, { useRef, useState } from 'react'
import { TextInput } from '@xyo-network/tool-storybook-react/dist/lib/Form'
import { parseError } from '../../gql/error'
import { configurePin } from '../../pin'

export default () => {
  const [error, setError] = useState('')
  const onSubmit = async (ev) => {
    ev.preventDefault()
    const target = ev.target
    const password = target.password.value.trim()
    const confirmPassword = target.confirmPassword.value.trim()
    try {
      if (!password) throw new Error('Password is required')
      if (password !== confirmPassword) throw new Error('Passwords do not match')
      await configurePin(password)
    } catch (e) {
      setError(parseError(e))
      target.password.value = ''
      target.confirmPassword.value = ''
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
        <TextInput 
          name='confirmPassword' 
          type='password' 
          placeholder='Confirm Password' 
          className='text-white' 
          inputClassName='px-2'
        />
        <button className='btn btn-info w-100' type='submit'>Continue</button>
      </form>
      <p className='text-danger text-center'>{error}</p>
    </>
  )
}