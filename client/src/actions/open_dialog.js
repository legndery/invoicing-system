import { OPEN_DIALOG } from './constants'
export default function(open){
    return {
        type: OPEN_DIALOG,
        payload: true
    }
}