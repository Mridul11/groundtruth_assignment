import { Types } from '../actions'
 
const  questions = [] ;

function rootReducer(state = questions, action){
    switch(action.type){
        case Types.CALLING_API:
            return state.concat(action.payload.data.results) 
        default:
            return state ;
    }
}

export default rootReducer ;