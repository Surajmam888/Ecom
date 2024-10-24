import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import Banner from '../component/Banner/Banner'
import Products from './Products/Products'
import SingleProductPage from './Products/SingleProductPage'
import Category from './Products/Category'
import CategoryList from './Category/CategoryList'
import SubcategoryList from './Category/SubcategoryList'
import { Box } from '@mui/material'

const Homepage = () => {
  return (
    <Box>
        <Header/>
        <Banner/>
        {/* <Category /> */}
        {/* <SingleProductPage/>
        <SubcategoryList/> */}
        {/* <CategoryList/> */}
        <Products/>
        <Footer/>
    </Box>
  )
}

export default Homepage