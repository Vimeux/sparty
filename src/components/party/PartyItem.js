import React from 'react'
import { Box, Divider, Text } from 'native-base'

const PartyItem = ({ party }) => {
  const date = new Date(party.date)
  const dateString = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`

  return (
    <Box>
      <Text>{party.name}</Text>
      <Text>{party.invitationCode}</Text>
      <Text>{dateString}</Text>
      <Text>{party.budget} €</Text>
      {party.products.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}
      <Divider my='2' />
    </Box>
  )
}

export default PartyItem
