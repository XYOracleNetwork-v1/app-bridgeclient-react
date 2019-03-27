import { CONNECTED_ARCHIVISTS } from './queries/archivists'
import { ADDRESS_BY_PUBLIC_KEY } from './queries/address'
import { ABOUT_BRIDGE } from './queries/about'
import { pinProvider } from '../pin'
import setWith from 'lodash/setWith'
import negate from 'lodash/negate'
import clone from 'lodash/clone'
import get from 'lodash/get'

const isSameId = (id) => (obj) => id === get(obj, 'id')

export const attachedArchivist = (
  cache,
  { data: { attachArchivist } }
) => {
  const state = cache.readQuery({ query: CONNECTED_ARCHIVISTS })
  const archivists = get(state, 'archivists') || []
  const newArchivists = [].concat(archivists).concat(attachArchivist)
  const newState = setWith(clone(state), 'archivists', newArchivists, clone)
  cache.writeQuery({
    query: CONNECTED_ARCHIVISTS,
    data: newState
  })
}

export const detachedArchivist = (
  cache,
  { data: { detachArchivist } }
) => {
  const state = cache.readQuery({ query: CONNECTED_ARCHIVISTS })
  const archivists = get(state, 'archivists') || []
  const newArchivists = archivists.filter(negate(isSameId(detachArchivist.id)))
  const newState = setWith(clone(state), 'archivists', newArchivists, clone)
  cache.writeQuery({
    query: CONNECTED_ARCHIVISTS,
    data: newState
  })
}


export const updatedPaymentKey = (
  cache,
  { data: { setPaymentKey } }
) => {
  const state = cache.readQuery({ query: ABOUT_BRIDGE })
  const newState = setWith(clone(state), 'paymentKey', setPaymentKey, clone)
  cache.writeQuery({
    query: ABOUT_BRIDGE,
    data: newState
  })
}

export const updatedPin = (
  cache,
  { data: { updatePin } }
) => {
  pinProvider.value = updatePin
}

export const claimedBridge = (
  cache,
  { data: { addBridge } }
) => {
  const publicKey = get(addBridge, 'publicKey')
  const variables = { publicKey }
  cache.writeQuery({
    query: ADDRESS_BY_PUBLIC_KEY,
    data: { addressByPublicKey: addBridge },
    variables,
  })

}

export const unclaimedBridge = (
  cache,
  { data: { deleteBridge } }
) => {
  const publicKey = get(deleteBridge, 'id')
  const variables = { publicKey }
  cache.writeQuery({
    query: ADDRESS_BY_PUBLIC_KEY,
    data: { addressByPublicKey: null },
    variables,
  })
}