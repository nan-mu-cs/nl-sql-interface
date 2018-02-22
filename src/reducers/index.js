/**
 * Created by kai on 21/02/2018.
 */
import initialState from "./initialState";

export default (state = initialState, action) => {
    // debugger;
    // console.log(initialState);
    switch (action.type){
        case "LOGIN":
        {
            return {...state,user:action.data.user,currentDatabase:action.data.currentDatabase};
        }
        case "UPDATE_DATABASES_NAME":{
            return {...state,databases:action.data};
        }
        case "UPDATE_TOTAL_PAGE":
            return {...state,totalPage:action.data};
        default:
            return state
    }
}