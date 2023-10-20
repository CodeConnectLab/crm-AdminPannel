import { configureStore } from "@reduxjs/toolkit";
import allhosting from "../features/allhostingSlice";


 export const store = configureStore({
  reducer: {
      app:allhosting,
   },
});


// persistStore(store);

//export default store;
