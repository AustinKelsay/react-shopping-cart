import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from "./components/contexts/ProductContext";
import CartContext from "./components/contexts/CartContext";
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
		console.log(cart);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}>


			<Navigation />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
				/>

			<Route
				path="/cart"
				component={ShoppingCart}
				/>

			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
