import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
};
const cartslice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addcart: (state,action)=>{
            const present=state.items.find(item=>item.id===action.payload.id)
            if(present){
                 present.quantity=present.quantity+1;
            }
            else{
                state.items.push({product:action.payload,quantity:1});
               
            }
        },
        updatequantity:(state,action)=>{
            const{id,number}=action.payload;
            const product=state.items.find(item=>item.product.id===id);
            product.quantity=number;
        },
        removeitem:(state,action)=>{
            state.items = state.items.filter(item => item.product.id !== action.payload);
        }
    }
})
export const {addcart,updatequantity,removeitem}=cartslice.actions;
export default cartslice.reducer;