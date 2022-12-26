import { createSlice } from "@reduxjs/toolkit";
import { logInUser, signUpUser } from "../components/services/usersDB";

const initialState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logIn: (state, action) => {
      logInUser(action.payload)
        .then((res) => localStorage.setitem("token", res.token))
        .then(() => {
          localStorage.get("token")
            .then((result) => {
              if (result) {
                state.value=true
                console.log(result);
              } else {
                state.value=false
                console.log("unauthorized");
              }
            })
            .catch((err) => {
                state.value=false
              console.log(err);
            });
        })
        .catch((err) => {
            state.value=false
          console.log(err);
        });
    },
    register: (state, action) => {
        signUpUser(action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
