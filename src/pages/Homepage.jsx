import React from 'react'
import Header from '../component/Header/Header'
import About from './About/About'
import Contact from './Contact/Contact'
import Service from './Service/Service'
import Footer from '../component/Footer/Footer'
import Banner from '../component/Banner/Banner'
import Products from './Products/Products'
import ProductPage from './product/Product'
import SingleProductPage from './Products/SingleProductPage'
import Category from './Products/Category'
import CategoryList from './Category/CategoryList'
import SubcategoryList from './Category/SubcategoryList'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        {/* <Category /> */}
        {/* <SingleProductPage/> */}
        {/* <ProductPage /> */}
        {/* <CartPage/> */}
        {/* <About/> */}
        <CategoryList/>
        {/* <SubcategoryList/> */}
        <Products/>
        {/* <Contact/> */}
        <Footer/>
    </div>
  )
}

export default Homepage