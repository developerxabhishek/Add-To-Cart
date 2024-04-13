import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, cartSlice)
const store = configureStore({
  reducer:{
    cartSlice:persistedReducer,
  }
})
export default store;
export const persistor = persistStore(store)