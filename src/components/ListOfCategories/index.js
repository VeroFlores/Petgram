import React, { useState, useEffect, Fragment } from 'react'
import Category from '../category'
import {
  List, Item
} from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => (
    window.fetch('https://petgram-server-api-vero.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  ), [])
  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
categories.map((category) =>
  <Item key={category.id}><Category {...category} /></Item>
)
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {renderList(true)}
    </>

  )
}
