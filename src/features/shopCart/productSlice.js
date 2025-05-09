import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts= createAsyncThunk('products/fetchProducts', // Action type
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; 
  }
);

const ProductSlice = createSlice({
    name:'products',
    initialState:{
        items:[],
        status:"idle"
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status='loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items=action.payload //get all data using payload and assign to items array
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status="failed"
        })
    }
})


export default ProductSlice.reducer;