/**
 * Created by kai on 21/02/2018.
 */
import initialState from "./initialState";

export default (state = initialState, action) => {
    // debugger;
    // console.log(initialState);
    switch (action.type){
        case "login": return {...state,user:action.value}
        default:
            return state
    }
}