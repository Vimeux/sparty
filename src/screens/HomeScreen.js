import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, ScrollView } from 'native-base'
import { useAuth } from '../contexts/AuthContext'
import { homeStyle } from '../theme/Styles'
import PartyList from '../components/party/PartyList'
import { getParties } from '../services/Api'
// import ProductList from '../components/product/ProductList'

function HomeScreen () {
  const { state } = useAuth()
  const [partiesList, setPartiesList] = useState([])

  const { state: { token } } = useAuth()

  useEffect(() => {
    // get the parties list from the API with async/await
    const getPartiesList = async () => {
      const parties = await getParties(token)
      // return parties.parties
      setPartiesList(parties.parties)
    }
    getPartiesList()
  }, [])

  return (
    <ScrollView>
      <Container w='100%'>
        <Box style={homeStyle.container}>
          <Heading style={homeStyle.heading}>
            Hey! {state.user.firstName} 🤙
          </Heading>
          <PartyList parties={partiesList} />
        </Box>
      </Container>
    </ScrollView>
  )
}

export default HomeScreen
