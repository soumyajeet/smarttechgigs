import { ADD_ITEM, SHOW_DETAILS, SHOW_ITEM } from '../constants/Constants';


const initialState = {
  data: []
};


const Reducer = (state = initialState, action) => {

  console.log(action);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: action.payload
      }
    case SHOW_DETAILS:
      return {
        ...state,
        data: action.payload
      }
    case SHOW_ITEM:
      return {
        ...state,
        data: action.payload
      }  
    default:
      return state;
  }

};


export default Reducer;