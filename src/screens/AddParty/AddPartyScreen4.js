import React, { useState, useEffect } from 'react'
import { Button, FormControl, Text, View } from 'native-base'
import { getProducts } from '../../services/Api'
import { useAddPartyContext } from '../../contexts/AddPartyContext'

const AddPartyScreen4 = () => {
  const { partyDatas, setPartyDatas } = useAddPartyContext()
  const [Products, setProducts] = useState([])

  useEffect(async () => {
    const products = await getProducts()
    setProducts(products.products)
  }, [])

  // add product to the list and if it's already in the list, increase the quantity
  const addProduct = (index, product) => {
    const newProducts = partyDatas.products.slice()
    // const productIndex = newProducts.findIndex((p) => p === product)
    // console.log(productIndex)
    if (newProducts.length === 0) {
      const element = { name: product, quantity: 1 }
      newProducts[index] = element
      setPartyDatas({ ...partyDatas, products: newProducts })
      return
    }
    // if the product isn't in the list, add it
    if (newProducts.findIndex((p) => p.name === product) === -1) {
      const element = { name: product, quantity: 1 }
      newProducts[index] = element
      setPartyDatas({ ...partyDatas, products: newProducts })
      return
    } else {
      newProducts[index].quantity++
      setPartyDatas({ ...partyDatas, products: newProducts })
    }
    console.log(partyDatas.products)
  }

  // remove product from the list and if it's the last one, remove the product
  const removeProduct = (index, product) => {
    const newProducts = partyDatas.products.slice()
    const productIndex = newProducts.findIndex((p) => p === product)
    if (productIndex) {
      newProducts[index].quantity--
      if (newProducts[index].quantity === 0) {
        newProducts.splice(index, 1)
      }
      setPartyDatas({ ...partyDatas, products: newProducts })
    }
  }

  return (
    <View>
      <Text>{JSON.stringify(partyDatas.products)}</Text>
      {Products.map((product, index) => (
        <FormControl
          key={index}
        >
          <FormControl.Label>{product.name}</FormControl.Label>
          <Button onPress={() => addProduct(index, product.name)}> + </Button>
          {partyDatas.products.find((p) => p.name === product.name) // check if the product exist in partyDatas
            ? (
              <Button onPress={() => removeProduct(index, product.name)}> - </Button>
              )
            : null}
        </FormControl>
      ))}
    </View>
  )
}

export default AddPartyScreen4
