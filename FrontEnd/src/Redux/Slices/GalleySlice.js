import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
images : [],
category : [],
}

export const getAllImages = createAsyncThunk("gallery/getallImages", async ()=>{
    const result = await axios.get("http://localhost:3000/getallimage");
    return result.data.getAllImage;
})

export const getAllCategory = createAsyncThunk("gallery/gtAllCategory", async ()=>{
    const result = await axios.get("http://localhost:3000/getcategory");
    return result.data.getcategory;
})

export const addCategory = createAsyncThunk("gallery/addCategory", async (payload)=>{
    const result = await axios.post("http://localhost:3000/addcategory", payload);
    return result.data;
})

export const addImages = createAsyncThunk("gallery/addImages", async (payload)=>{
    const result = await axios.post("http://localhost:3000/addimage", payload);
    return result.data;
})

export const getSingle = createAsyncThunk("gallery/getSingle", async (payload)=>{
    const result = await axios.get(`http://localhost:3000/getsigleimage?category=${payload}`);
    return result.data.getSingleImage;
})

export const GallerySlice = createSlice({
    name : "gallery",
    initialState,
    extraReducers : (builder)=> {
        builder.addCase(getAllImages.fulfilled, (state, action)=>{
            state.images = action.payload
        }),
        builder.addCase(getAllCategory.fulfilled, (state, action)=>{
            state.category = action.payload
        }),
        builder.addCase(getSingle.fulfilled, (state, action)=>{
            state.images = action.payload
        })
    }
})
// export const {} = GallerySlice.actions;
export default GallerySlice.reducer;