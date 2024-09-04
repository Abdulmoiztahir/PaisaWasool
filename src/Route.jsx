import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login";
import SignUp from "./pages/signup";
import Homepage from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/productDetails";
import Products from "./pages/Products";



function AppRouter() {
    return (
        <>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/" element={<Homepage />}/>    
                <Route path="/Signup" element={<SignUp />}/>
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails/>} />
            </Routes>
            <Footer/>

            </BrowserRouter>
        </>
    )
}

export default AppRouter