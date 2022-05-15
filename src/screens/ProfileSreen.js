import React from 'react'

import HeaderProfil from '../components/profil/HeaderProfil'
import UserProfil from '../components/profil/UserProfil'

// Navigation dans le profil

// fonction pour l'affichage du bon screen avec une route
function ProfileScreen () {
  return (
    <>
      <HeaderProfil />
      <UserProfil />
    </>
  )
}

export default ProfileScreen
