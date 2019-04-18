import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from  "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      }
    default:
      return state;
  }
};
