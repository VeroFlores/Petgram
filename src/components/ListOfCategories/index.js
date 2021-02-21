import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../category/index'
import {
  List, Item
} from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-api-vero-q6vytm0u1.vercel.app/categories')
      .then((resp) => resp.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}
const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      window.scrollY > 200
        ? setShowFixed(true)
        : setShowFixed(false)
      // const newShowFixed=window.scrollY<200
      // showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = (fixed) => (
    <List fixed={fixed ? 'fixed' : ''}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map((category) =>
            <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
