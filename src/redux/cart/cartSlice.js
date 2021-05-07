import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clothing : '',
    userCart : [],
    // caps : '',
    // jackets : '',
    // footware : '',
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        setProducts: (state, action) =>{
            state.clothing = action.payload;
        },
        addToCart : (state, action) =>{
            const item = state.clothing.find(item=> item.id === action.payload);
            const inCart = state.userCart.find(item => item.id === action.payload ? true : false);
            return{
                ...state,
                userCart : inCart ? state.userCart.map(item => item.id === action.payload ? {...item, qty : item.qty + 1} : item) : [...state.userCart, {...item, qty : 1 }],
            }
        },
        removeFromCart : (state, action) =>{
            return{
                ...state,
                cart : state.cart.filter(item => item.id !== action.payload),
            }
        },
    }
})



export const { setProducts,addToCart, removeFromCart } = cartSlice.actions;

export const selectclothing = (state) => state.cart.clothing;
export const selectCart = (state) => state.cart.userCart;
export default cartSlice.reducer;