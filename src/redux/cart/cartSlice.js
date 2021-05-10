import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clothing : '',
    userCart : [],
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
                userCart : state.userCart.filter(item => item.id !== action.payload),
            }
        },
        adjustQty : (state, action, qty)=>{
            return{
                ...state,
                userCart : state.userCart.map(item => item.id === +action.payload.id ? {...item, qty : +action.payload.qty} : item)
            }
        }
    }
})



export const { setProducts,addToCart, removeFromCart, adjustQty } = cartSlice.actions;

export const selectclothing = (state) => state.cart.clothing;
export const selectuserCart = (state) => state.cart.userCart;
export default cartSlice.reducer;