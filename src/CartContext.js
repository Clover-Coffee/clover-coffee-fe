import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItemToCart = (item) => {
		const existingItemIndex = cart.findIndex(
			(cartItem) => cartItem.id === item.id
		);
		if (existingItemIndex >= 0) {
			const updatedCart = [...cart];
			const existingItem = updatedCart[existingItemIndex];
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
			updatedCart[existingItemIndex] = updatedItem;
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...item, quantity: 1 }]);
		}
	};

	const removeItemFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const decreaseQuantity = (id) => {
		const updatedCart = [...cart];
		const existingItemIndex = updatedCart.findIndex((item) => item.id === id);
		const existingItem = updatedCart[existingItemIndex];

		if (existingItem.quantity === 1) {
			removeItemFromCart(id);
		} else {
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity - 1,
			};
			updatedCart[existingItemIndex] = updatedItem;
			setCart(updatedCart);
		}
	};

	return (
		<CartContext.Provider value={{ cart, setCart, addItemToCart, removeItemFromCart, decreaseQuantity }}>
			{children}
		</CartContext.Provider>
	);
};
