import {ADD_ITEM} from '../constants/Constants';
import {SHOW_DETAILS} from '../constants/Constants';
import {SHOW_ITEM} from '../constants/Constants';



export const addItems = (data)=> {
    
    return {
        type: ADD_ITEM,
        payload: data
    }
}

export const showOnlineDetails = (data)=> {
    console.log(data);
    return {
        type: SHOW_ITEM,
        payload: data
    }
}

export const showDetails = (data) => {
    
    return {
        type: SHOW_DETAILS,
        payload: data
    }
}

