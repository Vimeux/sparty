import React from 'react'
import { logoutUser, useAuth } from '../../contexts/AuthContext'
import { Box, Button, Center, Container, Flex, Text } from 'native-base'
import { styles } from '../../theme/Profil'

function UserProfil () {
  const { dispatch, state } = useAuth()

  // Déconnexion
  const handleLogout = async () => {
    await logoutUser(dispatch)
  }

  // Récupération des informations de l'utilisateur
  const userInfos = state.user

  return (
    <Container
      style={{ maxWidth: '100%', alignItems: 'center' }}
      h='100%'
      w='100%'
    >
      <Box>
        <Center>
          <Flex flexDirection='row'>
            <Text style={styles.titleText}>{userInfos.firstName}</Text>
            <Text style={styles.titleText}>{userInfos.lastName}</Text>
          </Flex>
          <Text>{userInfos?.phone}</Text>
          <Text>{userInfos.email}</Text>
        </Center>
      </Box>
      <Button onPress={handleLogout} style={styles.logout} size='md'>Se déconnecter</Button>
    </Container>
  )
}

export default UserProfil
