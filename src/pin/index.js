import { createContext } from 'react'
import { AUTH_TOKEN } from '../gql/queries/authToken'
import { UPDATE_PIN } from '../gql/mutations/updatePin'
import client from '../gql/client'
import get from 'lodash/get'

let [pinPromise, resolvePin, rejectPin] = (() => {
  let res, rej
  return [new Promise((_res, _rej) => {
    res = _res
    res = _rej
  }), res, rej]
})()

export const pinProvider = {
  valid: false,
  value: ''
}

export const context = createContext(pinProvider)

export const usePinProvider = () => {
  if (pinProvider.valid) return pinProvider
  if (pinProvider.error) return pinProvider
  throw pinPromise
}

export const setPin = async (pin) => {
  const result = await client.query({
    query: AUTH_TOKEN,
    variables: { pin }
  })
  pinProvider.value = get(result, 'data.getAuthToken')
  pinProvider.valid = true
  resolvePin(pinProvider)
}

export const configurePin = async (pin) => {
  await client.mutate({
    mutation: UPDATE_PIN,
    variables: { oldPin: 'xyxyo', newPin: pin }
  })
  await setPin(pin)
}