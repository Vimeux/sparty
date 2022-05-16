import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Icon, Text, View, VStack } from 'native-base'
import { useAddPartyContext } from '../contexts/AddPartyContext'

const AddParty = () => {
  const { steps, activeIndex, handleNext, handleBack, addTrip, TripDatas } = useAddPartyContext()

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
                    <Button onPress={() => addTrip(TripDatas)}>Créer la soirée</Button>
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
