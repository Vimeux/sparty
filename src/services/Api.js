import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.17:3000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

/**
 * Appel d'API pour la connexion
 * @param { Object } credentials
 * @returns { Object }
 */
const loginWithCredentials = async credentials => {
  try {
    const response = await api.post('/auth/signin', credentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * registerWithRegistrationCredentials
 * @param { props } registrationCredentials Credentials for registration email or username + password requireds
 * @returns { Function } Registration with credentials
 */
const registerWithRegistrationCredentials = async registrationCredentials => {
  try {
    const response = await api.post(
      '/auth/signup',
      registrationCredentials
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const addParty = async party => {
  // on récupère le token de l'utilisateur connecté pour l'envoyer dans le header de la requête
  const getUserToken = await AsyncStorage.getItem('AUTH')
  const userToken = getUserToken ? JSON.parse(getUserToken).token : null
  try {
    const response = await api.post('/party', party, {
      headers: {
        'x-access-token': userToken
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Récupération des informations de l'utilisateur actuellement connecté
// const getUserInfos = async () => {
//   // On récupère le token de l'utilisateur connecté pour le passer dans le header
//   const getUserToken = await AsyncStorage.getItem('AUTH')
//   const userToken = getUserToken ? JSON.parse(getUserToken).token : null
//   try {
//     const response = await api.get('/users/me', {
//       headers: {
//         Authorization: `Bearer ${userToken}`
//       }
//     })
//     return response.data
//   } catch (error) {
//     console.error(error)
//   }
// }

export {
  loginWithCredentials,
  registerWithRegistrationCredentials,
  addParty
}
