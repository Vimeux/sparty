import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Text, VStack } from 'native-base'
import { useAddPartyContext } from '../contexts/AddPartyContext'

const AddParty = () => {
  const { steps, activeIndex, handleNext, handleBack, addPartyData, partyDatas, error } = useAddPartyContext()

  const [activeStep, setActiveStep] = useState(steps[activeIndex])

  useEffect(() => {
    setActiveStep(steps[activeIndex])
  }, [activeIndex])

  return (
    <Container>
      <VStack style={{ width: '100%' }} space={8}>
        <activeStep.Component />
        {!activeStep.hideNext && (
          <>
            {activeIndex === steps.length - 1
              ? (
                <VStack direction='row' space={4} style={{ width: '100%' }}>
                  <Box style={{ width: '100%' }}>
                    {activeIndex !== 0 && <Button onPress={handleBack}>Retour</Button>}
                    <Button onPress={() => addPartyData(partyDatas)}>Créer la soirée</Button>
                    {error ? <Text>{error}</Text> : null}
                  </Box>
                </VStack>
                )
              : (
                <>
                  <VStack direction='row' space={4} w='100%'>
                    <Box style={{ width: '100%' }}>
                      {activeIndex !== 0 && <Button onPress={handleBack}>Retour</Button>}
                      <Button onPress={handleNext}>Suivant</Button>
                    </Box>
                  </VStack>
                </>
                )}
          </>
        )}
      </VStack>
    </Container>
  )
}

export default AddParty
