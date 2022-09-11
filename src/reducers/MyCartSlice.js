import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MyCartItems: [],
};

export const MyCartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addToMyCart: (state, action) => {
      let indexOfFounded = -1;
      if (state.MyCartItems.length > 0) {
        state.MyCartItems.forEach((element) => {
          if (action.payload.title === element.title) {
            indexOfFounded = state.MyCartItems.indexOf(element);
          }
        });
        if (indexOfFounded !== -1) {
          state.MyCartItems[indexOfFounded].count++;
          state.MyCartItems[indexOfFounded].price =
            state.MyCartItems[indexOfFounded].initialPrice *
            state.MyCartItems[indexOfFounded].count;
        } else {
          state.MyCartItems.push({
            image: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
            initialPrice: action.payload.price,
            count: 1,
          });
        }
      } else {
        state.MyCartItems.push({
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          initialPrice: action.payload.price,
          count: 1,
        });
      }
    },
    removeFromMyCart: (state, action) => {
      if (state.MyCartItems[action.payload].count < 2)
        state.MyCartItems.splice(action.payload, 1);
      else {
        state.MyCartItems[action.payload].count--;
        state.MyCartItems[action.payload].price =
          state.MyCartItems[action.payload].initialPrice *
          state.MyCartItems[action.payload].count;
      }
    },
    resetMyCart: (state) => {
      state.MyCartItems = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToMyCart, removeFromMyCart, resetMyCart } =
  MyCartSlice.actions;

export default MyCartSlice.reducer;
