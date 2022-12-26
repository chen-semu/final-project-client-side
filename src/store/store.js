import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./usersStore"

export default configureStore({
    reducer:{
        user: userReducer,
    }
})