import { OPEN_DIALOG, CLOSE_DIALOG} from '../actions/constants'

const INITIAL_STATE = false

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case OPEN_DIALOG:
        case CLOSE_DIALOG:
        return action.payload
        default:
        return state
    }
}