import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={
    date:[],
    isLoading:false,
    isError:false
}
export const fetchData = createAsyncThunk('product/fetchData', async()=>{
    try{
        const {data} = await axios.get('htpp"//localhost:4000/api/products');
    }catch(err){
return err;
    }
})
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers:{
[fetchData.pending]:(state)=>{
    state.isLoading(true);
},
[fetchData.fulfilled]:(state, action)=>{
    state.isLoading = false;
    state.data = action.payload
},
[fetchData.rejected]:(state)  =>{
    state.isLoading= false
    state.isError = true
}
  }
})


export default ProductSlice.reducer