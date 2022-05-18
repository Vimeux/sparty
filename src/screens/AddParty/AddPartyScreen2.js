import React from 'react'
import { Input, Text, View } from 'native-base'
import { useAddPartyContext } from '../../contexts/AddPartyContext'

const AddPartyScreen2 = () => {
  const { partyDatas, setPartyDatas } = useAddPartyContext()

  const onChange = (value) => {
    setPartyDatas({ ...partyDatas, maxPersonn: value })
  }

  return (
    <View>
      <Text>Nombre de personne</Text>
      <Input
        type='number'
        keyboardType='decimal-pad'
        onChangeText={onChange}
        value={partyDatas.maxPersonn}
      />
    </View>
  )
}

export default AddPartyScreen2
