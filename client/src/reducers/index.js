import { combineReducers } from "redux";

import InvoiceReducer from './reducer_invoice'
import DialogReducer from './reducer_dialog'
const rootReducer = combineReducers({
    invoice: InvoiceReducer,
    open: DialogReducer
})

export default rootReducer;