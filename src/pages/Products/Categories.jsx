import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories')
      const data = await response.json()
      console.log(data, 'data')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  if (categories.length === 0) return <div>Loading.....</div>

  return (
      <CategoriesCard cards={categories}/>

  )
}

export default Categories