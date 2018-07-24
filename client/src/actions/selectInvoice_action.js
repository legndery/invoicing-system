import { SELECT_INVOICE } from './constants'
export default function(invoiceID){
    return {
        type: SELECT_INVOICE,
        payload: invoiceID
    }
}