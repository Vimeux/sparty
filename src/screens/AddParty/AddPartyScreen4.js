import React, { useState, useEffect } from 'react'
import { Button, FormControl, Text, View } from 'native-base'
import { getProducts } from '../../services/Api'
import { useAddPartyContext } from '../../contexts/AddPartyContext'

const AddPartyScreen4 = () => {
  const { partyDatas, setPartyDatas } = useAddPartyContext()
  const [Products, setProducts] = useState([])

  const fetchData = async () => {
    // waiting 1s
    // await new Promise(resolve => setTimeout(resolve, 100))
    const products = await getProducts()
    setProducts(products.products)
  }

  useEffect(() => {
    fetchData()
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
    if (newProducts.findIndex((p) => p?.name === product) === -1) {
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
    const productIndex = newProducts.findIndex((p) => p?.name === product)
    if (productIndex !== -1) {
      console.log({ product: newProducts[productIndex].quantity })
      if (newProducts[productIndex].quantity === 1) {
        newProducts.splice(productIndex, 1)
      } else {
        newProducts[productIndex].quantity -= 1
      }
      setPartyDatas({ ...partyDatas, products: newProducts })
    }
  }

  return (
    <View>
      <Text>{JSON.stringify(partyDatas.products)}</Text>
      {Products
        ? Products.map((product, index) => (
          <FormControl
            key={index}
          >
            <FormControl.Label>{product.name}</FormControl.Label>
            <Button onPress={() => addProduct(index, product.name)}> + </Button>
            {/* {console.log(partyDatas.products)} */}
            {partyDatas.products.find((p) => p?.name === product.name) // check if the product exist in partyDatas
              ? (
                <Button onPress={() => removeProduct(index, product.name)}> - </Button>
                )
              : null}
          </FormControl>
        ))
        : (
          <Text>Loading...</Text>
          )}
    </View>
  )
}

export default AddPartyScreen4
