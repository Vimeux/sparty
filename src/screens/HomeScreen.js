import React from 'react'
import { Box, Container, Heading } from 'native-base'
import { useAuth } from '../contexts/AuthContext'
import { homeStyle } from '../theme/Styles'

function HomeScreen ({ navigation }) {
  const { state } = useAuth()
  return (
    <>
      <Container w='100%'>
        <Box style={homeStyle.container}>
          <Heading style={homeStyle.heading}>
            Hey! {state.user.firstName} 🤙
          </Heading>
        </Box>
      </Container>
    </>
  )
}

export default HomeScreen