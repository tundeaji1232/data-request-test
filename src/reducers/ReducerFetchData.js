import { FETCH_DATA }  from "../actions/type";

// export default (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_DATA:
//       if (action.payload) {
//         /////////////////////////////what comes from the request url//////
//         console.log("action.payload",action.payload)
//         return action.payload;
//       }
//       break;
//     default:
//       return state;
//   }

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;

    default:
      return state;

  }
}