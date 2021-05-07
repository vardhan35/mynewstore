import { combineReducers } from "redux";
import { cartSlice } from "./cart/cartSlice";
import { userSlice } from "./user/userSlice";


const rootReducer = combineReducers({
    cart : cartSlice.reducer,
    user : userSlice.reducer,
})

export default rootReducer