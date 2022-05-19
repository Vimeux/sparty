import React, { createContext, useContext, useState, useMemo } from 'react'
import AddPartyScreen1 from '../screens/AddParty/AddPartyScreen1'
import AddPartyScreen2 from '../screens/AddParty/AddPartyScreen2'
import AddPartyScreen3 from '../screens/AddParty/AddPartyScreen3'
import AddPartyScreen4 from '../screens/AddParty/AddPartyScreen4'
// import { useAuth } from './AuthContext'
import { addParty } from '../services/Api'

const AddPartyContext = createContext()

export const useAddPartyContext = () => {
  const context = useContext(AddPartyContext)
  if (!context) {
    throw new Error('useAddPartyContext must be used within a AddPartyProvider')
  }
  return context
}

export const AddPartyProvider = ({ children }) => {
  // const { state } = useAuth()

  const steps = [
    {
      Component: AddPartyScreen1
    },
    {
      Component: AddPartyScreen2
    },
    {
      Component: AddPartyScreen3
    },
    {
      Component: AddPartyScreen4
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((preActiveIndex) => preActiveIndex + 1)
  }

  const handleBack = () => {
    setActiveIndex((preActiveIndex) => preActiveIndex - 1)
  }

  const [partyDatas, setPartyDatas] = useState({
    budget: null,
    invitationCode: '',
    date: new Date(),
    maxPersonn: null,
    products: []
  })

  const [error, setError] = useState(null)

  const addPartyData = async (partyData) => {
    const data = await addParty(partyData)
    if (data.error) {
      setError('une erreur s\'est produite, vueillez réessayer plus tard')
    } else {
      setError('Formulaire Soumis')
    }
  }

  const value = useMemo(
    () => ({
      steps,
      activeIndex,
      handleNext,
      handleBack,
      partyDatas,
      setPartyDatas,
      addPartyData,
      error
    }),
    [
      activeIndex,
      setActiveIndex,
      addPartyData,
      handleNext,
      handleBack,
      partyDatas,
      setPartyDatas,
      error
    ]
  )

  return (
    <AddPartyContext.Provider value={value}>
      {children}
    </AddPartyContext.Provider>
  )
}
