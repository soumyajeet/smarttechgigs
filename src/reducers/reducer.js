import { ADD_ITEM, SHOW_DETAILS, SHOW_ITEM } from '../constants/Constants';


const initialState = {
  data: []
};


const Reducer = (state = initialState, action) => {

  console.log(action);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...initialState,
        data: action.payload
      }
    case SHOW_DETAILS:
      return {
        ...initialState,
        data: action.payload
      }
    case SHOW_ITEM:
      return {
        ...initialState,
        data: action.payload
      }  
    default:
      return initialState;
  }

};


export default Reducer;