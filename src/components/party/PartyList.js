import React, { useState, useEffect } from 'react'
import { Box, Divider, Text, View } from 'native-base'
import PartyItem from './PartyItem'

const PartyList = ({ parties }) => {
  const [partyToday, setPartyToday] = useState([])
  const [partyFuture, setPartyFuture] = useState([])
  const [partyPast, setPartyPast] = useState([])

  useEffect(() => {
    const today = new Date()
    const todayString = today.getDate()

    const partyToday = parties.filter((party) => {
      const date = new Date(party.date)
      const dateString = date.getDate()
      return dateString === todayString
    })
    setPartyToday(partyToday)

    const partyFuture = parties.filter((party) => {
      const date = new Date(party.date)
      const dateString = date.getDate()
      return dateString > todayString
    })
    setPartyFuture(partyFuture)

    const partyPast = parties.filter((party) => {
      const date = new Date(party.date)
      const dateString = date.getDate()
      return dateString < todayString
    })
    setPartyPast(partyPast)
  }, [parties])

  return (
    <View>
      <Text>today</Text>
      {!partyToday || partyToday.length < 1
        ? (
          <Text>No party today</Text>
          )
        : (
            partyToday.map((party) => (
              <PartyItem key={party.id} party={party} />
            ))
          )}
      <Divider my='5' />
      <Text>future</Text>
      {!partyFuture || partyFuture.length < 1
        ? (
          <Text>No party in the future</Text>
          )
        : (
            partyFuture.map((party) => (
              <PartyItem key={party.id} party={party} />
            ))
          )}
      <Divider my='5' />
      <Text>past</Text>
      {!partyPast || partyPast.length < 1
        ? (
          <Text>No party in the past</Text>
          )
        : (
            partyPast.map((party) => (
              <PartyItem key={party.id} party={party} />
            ))
          )}
    </View>
  )
}

export default PartyList
