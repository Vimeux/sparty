import React, { useState } from 'react'
import { Input, Text, View, VStack } from 'native-base'
import DatePicker from 'react-native-date-picker'
import { useAddPartyContext } from '../../contexts/AddPartyContext'

const AddPartyScreen1 = () => {
  const { partyDatas, setPartyDatas } = useAddPartyContext()
  const [date, setDate] = useState(partyDatas.date)
  const [invitationCode, setInvitationCode] = useState(partyDatas.invitationCode)

  const handleDateChange = (date) => {
    setDate(date)
    setPartyDatas({ ...partyDatas, date })
    console.log('date: ', date)
  }

  const handleInvitationCodeChange = (invitationCode) => {
    setInvitationCode(invitationCode)
    setPartyDatas({ ...partyDatas, invitationCode })
    console.log('invitationCode: ', invitationCode)
  }

  return (
    <View>
      <VStack>
        <Text>invitationCode</Text>
        <Input
          onChangeText={handleInvitationCodeChange}
          value={invitationCode}
        />
      </VStack>
      <VStack>
        <Text>Date de la soirée</Text>
        <Text>{partyDatas.date.toLocaleDateString()} - {partyDatas.date.toLocaleTimeString()}</Text>
        <DatePicker
          date={date}
          locale='fr'
          timeZoneOffsetInMinutes={120}
          onDateChange={handleDateChange}
        />
      </VStack>
    </View>
  )
}

export default AddPartyScreen1
