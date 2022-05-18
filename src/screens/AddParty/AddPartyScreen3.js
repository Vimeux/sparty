import React, { useState, useEffect } from 'react'
import { Container, Input, Text, View } from 'native-base'
import { useAddPartyContext } from '../../contexts/AddPartyContext'

const AddPartyScreen3 = () => {
  const { partyDatas, setPartyDatas } = useAddPartyContext()
  const [budgetPersonn, setBudgetPersonn] = useState()

  const onChange = (value) => {
    // sauvegarde du budget global
    setPartyDatas({ ...partyDatas, budget: value })
    // permet de récupérer le budget de chaque personne
    const budgetPersonn = value / partyDatas.maxPersonn
    setBudgetPersonn(budgetPersonn)
  }

  // permet de récupérer le budget par personne à chaque chargement du composant
  useEffect(() => {
    if (partyDatas.maxPersonn && partyDatas.budget) {
      const budgetPersonn = partyDatas.budget / partyDatas.maxPersonn
      setBudgetPersonn(budgetPersonn)
    }
  }, [])

  return (
    <View>
      <Text>budget max</Text>
      <Input
        type='number'
        keyboardType='decimal-pad'
        onChangeText={onChange}
        value={partyDatas.budget}
      />
      {partyDatas.budget && (
        <Container>
          <Text>Soit une moyenne de :</Text>
          <Text>{budgetPersonn?.toFixed(2)} par personne</Text>
          <Text>(Basé sur {partyDatas.maxPersonn} personne maximum)</Text>
        </Container>
      )}
    </View>
  )
}

export default AddPartyScreen3
