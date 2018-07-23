import { combineReducers } from "redux";

import InvoiceReducer from './reducer_invoice'
const rootReducer = combineReducers({
    invoiceList: InvoiceReducer,
    selectedInvoice: InvoiceReducer
})

export default rootReducer;