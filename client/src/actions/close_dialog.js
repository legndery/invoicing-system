import { CLOSE_DIALOG } from './constants'
export default function(open){
    return {
        type: CLOSE_DIALOG,
        payload: false
    }
}