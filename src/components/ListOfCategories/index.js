import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window
      .fetch('https://react-avanzado-leonardo.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}
// el operador res trae todo el contenido y lo envia como props individuales {...category}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 180
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? (
          <Item key='loading'>
            <Category />
          </Item>
          )
        : (
            categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))
          )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
