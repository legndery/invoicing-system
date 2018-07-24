import { SELECT_INVOICE, FETCH_INVOICE } from '../actions/constants'
const INTIAL_STATE= { invoiceList: [], invoiceID: null, invoiceArrIDMap:{} }

export default function(state = INTIAL_STATE, action){
    switch(action.type){
        case SELECT_INVOICE: 
        return {
            ...state,
            invoiceID: action.payload
        }
        
        case FETCH_INVOICE:
        const payload = action.payload;
        const invArrMap = payload.reduce((p,c,i)=> {
            p[c.id] = i
            return p;
        }, {})
        return {
            ...state,
            invoiceList: payload,
            invoiceArrIDMap: invArrMap
        }
    }
    return state
}