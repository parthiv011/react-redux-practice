import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    createCustomer: {
      prepare: (fullName: string, nationalID: string) => {
        return {
          payload: { fullName, nationalID },
        };
      },
      reducer(
        state,
        action: PayloadAction<{ fullName: string; nationalID: string }>
      ) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

console.log(updateName("Parthiv"));

export default customerSlice.reducer;

// export default function customerReducer(
//   state = initialStateCustomer,
//   action: any
// ) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName: string, nationalID: string) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName: string) {
//   return {
//     type: "customer/updateName",
//     payload: fullName,
//   };
// }
