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
        case "PREV_PAGE":
            let page = state.currentPage;
            if(page - 1 >= 0)
                page -= 1;
            return {...state,currentPage:page};
        case "PREV_NEXT":
            page = state.currentPage;
            if(page + 1 < state.totalPage)
                page += 1;
            return {...state,currentPage:page};
        default:
            return state
    }
}