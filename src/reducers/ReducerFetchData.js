import { FETCH_DATA }  from "../actions/type";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;

    default:
      return state;

  }
}