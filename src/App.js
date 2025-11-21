import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';

import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Iteam from './component/Iteam';
import Cart from './component/Cart';
import contextContent from './context/contextContent';
import { Component } from 'react';
import RedProtectedRoute from "./component/redProtectedRoute";

class App extends Component {
  state = {
    cartList: []
  };

  addCartIteam = (productData) => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, productData]
    }));
  };

  deleteCartIteam = (id) => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.id !== id)
    }));
  };

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <contextContent.Provider
          value={{
            cartList,
            addCartIteam: this.addCartIteam,
            deleteCartIteam: this.deleteCartIteam
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <RedProtectedRoute>
                  <Home />
                </RedProtectedRoute>
              }
            />

            <Route
              path="/iteam"
              element={
                <RedProtectedRoute>
                  <Iteam />
                </RedProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <RedProtectedRoute>
                  <Cart />
                </RedProtectedRoute>
              }
            />

         
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </contextContent.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
