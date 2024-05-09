import {configureStore} from '@reduxjs/toolkit';
import GallerySlice from '../Redux/Slices/GalleySlice'
export const Store = configureStore({
    reducer : {
        gallery : GallerySlice,
    },
})
// export default Store;