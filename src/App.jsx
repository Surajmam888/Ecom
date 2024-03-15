import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import { Box, Container } from '@mui/material';
import ForgotPassword from './pages/Login/ForgotPassword';
import SingleProductPage from './pages/Products/SingleProductPage';
import Products from './pages/Products/Products';
import Cart from './pages/Products/Cart';
import SignupForm from './pages/Login/SignupForm';

function App() {
  return (
    <>
      <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/signupform" element={<SignupForm />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
